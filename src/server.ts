// Architectural pattern: MVC, Dependency Injection, MVP
//MVC= MODEL VIEW CONTROLLER

//Design pattern: Middleware, Decorator
//import moment  from "moment";     //module js da bolsa require orniga import ni ishlatyapmiz  // const moment = require('moment'); common js da shunde ishlatganmiz
import dotenv from "dotenv";
dotenv.config({
  path: process.env.NODE_ENV === "production" ? ".env.production" : ".env",
}); // manashuyerda config metodini qolladik va shu yerda dotenv environmental variablelarni integratsiyasini amalga oshirdik
import mongoose from "mongoose";
import server from "./app";
mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB  connection succeed");
    const PORT = process.env.PORT ?? 3003;
    server.listen(PORT, function () {
      console.info(`The server is running successfully on port : ${PORT}`);
      console.info(`Admin project on http://localhost:${PORT}/admin\n`);
    });
  })
  .catch((err) => console.log("ERROR on connection  MongoDB", err));
