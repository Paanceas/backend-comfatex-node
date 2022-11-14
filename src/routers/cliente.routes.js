import { Router } from "express";
import { cliente_metodos } from "../controllers/cliente.controller";

const router = Router();

router.post("/", cliente_metodos.setCliente);

export default router;