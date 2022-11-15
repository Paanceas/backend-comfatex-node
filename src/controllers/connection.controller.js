import { response } from "../common/response";
import { getConnection } from "../database/database";

const getConexion = async(_, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("CALL siegvadbd.getBaseDatos();");
        res.json(response(200, "Consulta tallas", result[0]));
        res.status(200)
    } catch (error) {
        console.log("🚀 ~ file: connection.controller.js ~ line 11 ~ getConexion ~ error", error)
        res.status(500);
        res.json(response(500, error.sqlMessage, null));
    }
}

export const methods = {
    getConexion
}