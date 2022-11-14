import { response } from "../common/response";
import { getConnection } from "./../database/database";

const getTallas = async(_, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("CALL siegvadbd.getTallas();");
        res.json(response(200, "Consulta tallas", result[0]));
        res.status(200)
    } catch (error) {
        res.status(500);
        res.json(response(500, error.sqlMessage, null));
    }
}

export const methods = {
    getTallas
}