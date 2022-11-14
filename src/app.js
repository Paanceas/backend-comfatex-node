 import express from "express";
 import morgan from "morgan";
 import bodyParser from "body-parser";
 import cors from "cors";

 const app = express();

//  settings
app.set("port",  process.env.PORT);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// middelwares
app.use(morgan("dev"));

// Routes
import connectionRouters from "./routers/connection.routes";
app.use("/api/conexion", connectionRouters);

// Routes
import clienteRouters from "./routers/cliente.routes";
app.use("/api/cliente", clienteRouters);

 export default app;