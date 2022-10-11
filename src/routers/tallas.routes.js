import { Router } from "express";
import { methods } from "../controllers/tallas.controller";

const router=Router();

router.get("/", methods.getTallas);

export default router;