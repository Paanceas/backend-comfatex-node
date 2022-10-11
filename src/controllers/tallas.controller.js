import { getConnection } from "./../database/database";

const getTallas = async(req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("CALL siegvadbd.getTallas();");
        console.log("🚀 ~ file: tallas.controller.js ~ line 6 ~ getTallas ~ result", result);
        res.json(result[0]);
        res.status(200)
    } catch (error) {
        res.status(500);
        res.json(error);
    }
    
}

export const methods = {
    getTallas
}