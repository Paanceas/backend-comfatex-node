import { Router } from "express";
import { methods } from "../controllers/connection.controller";

const router=Router();

router.get("/", methods.getConexion);

export default router;