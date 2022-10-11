 import express from "express";
 import morgan from "morgan";

 const app = express();

//  settings
app.set("port",  process.env.PORT);

// middelwares
app.use(morgan("dev"));

// Routes
import tallasRouters from "./routers/tallas.routes";
app.use("/api/tallas", tallasRouters);

 export default app;