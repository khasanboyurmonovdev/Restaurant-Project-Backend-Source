import cors from "cors";
import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { MORGAN_FORMAT } from "./libs/config";
import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import { T } from "./libs/types/common";
const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
  uri: String(process.env.MONGO_URL),
  collection: "sessions",
});
/*1- ENTRANCE*/
const app = express(); // bu yerda expressni chaqirib olyapmiz

app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("./uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // bu kod orqali rest API sifatida request bo'lyapkan data larni body sida kelyapkan  json data otkazishga ruxsat beryapmiz
app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser());
app.use(morgan(MORGAN_FORMAT));

/**2- SESSIONS */
app.use(
  session({
    secret: String(process.env.SESSION_SECRET),
    cookie: {
      maxAge: 1000 * 3600 * 6, // 6hours
    },
    store: store,

    resave: true,
    saveUninitialized: true,
  })
);
app.use(function (req, res, next) {
  const sessionInstance = req.session as T;
  res.locals.member = sessionInstance.member;
  next();
});

/**3-VIEWS */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
/**4-ROUTERS */
app.use("/admin", routerAdmin); //SSR: EJS
app.use("/", router); //Middleware design Pattern //SINGLE PAGE APPLICATION: REACT
export default app; // module.exports=app; bolardi common js da. bu yerda esma js da ishlatyapkanimiz uchun boshqacharo
