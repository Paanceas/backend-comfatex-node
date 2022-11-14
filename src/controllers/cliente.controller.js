import { response, setVar } from "../common/response";
import { getConnection } from "./../database/database";

const setCliente = async(req, res) => {
    try {
        const roll = 'Cliente';
        let id_cliente;
        const { body } = req;
        const connection = await getConnection();
        const existe_usuario = setVar(await connection.query(`CALL siegvadbd.getExisteUsuarioCliente("${body.email_cliente}");`));
        console.log("🚀 ~ file: cliente.controller.js ~ line 11 ~ setCliente ~ existe_usuario", existe_usuario)
        if (!existe_usuario) {
            const crear_usuario = setVar(await connection.query(`CALL siegvadbd.setUsuario("${body.email_cliente}","${body.password_cliente}","${roll}");`));
            console.log("🚀 ~ file: cliente.controller.js ~ line 14 ~ setCliente ~ crear_usuario", crear_usuario)
            id_cliente = crear_usuario.id_usuario;
        }else {
            id_cliente = existe_usuario.id_usuario;
        }
        const crear_cliente =  setVar(await connection.query(`CALL siegvadbd.setCliente(${id_cliente},"${body.email_cliente}","${body.nombre_cliente}","${body.apellido_cliente}","${body.direccion_cliente}","${body.telefono_cliente}");`));
        console.log("🚀 ~ file: cliente.controller.js ~ line 20 ~ setCliente ~ crear_cliente", crear_cliente)
        if(crear_cliente && crear_cliente.exist_cliente === 1) {
           await connection.query(`CALL siegvadbd.updCliente("${body.email_cliente}","${body.nombre_cliente}","${body.apellido_cliente}","${body.direccion_cliente}","${body.telefono_cliente}");`);
        }
        res.status(201);
        res.json(response(201, "Creación de Cliente exitosa", null));
    } catch (error) {
        console.log("🚀 ~ file: cliente.controller.js ~ line 21 ~ setCliente ~ error", error)
        res.status(500);
        res.json(response(500, error.sqlMessage, null));
    }
}

export const cliente_metodos = {
    setCliente
}