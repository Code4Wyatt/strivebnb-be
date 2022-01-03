import express from "express";
import listEndpoints from "express-list-endpoints";
import { testDbConnection } from "./utils/db/connect.js";
import sequelize, { connectDB } from "./utils/db/index.js";
import cors from "cors";
import citiesRouter from "./utils/db/models/cities.js";

const server = express();
const port = process.env.PORT;

const whiteList = [process.env.FE_LOCAL_URL, process.env.FE_REMOTE_URL];

const corsOptions = {
    origin: function (origin, next) {
        console.log(origin);
        if (!origin || whiteList.indexOf(origin) !== -1) {
            next(null, true);
        } else {
            next(new Error("Not allowed by CORS"));
        }
    },
};


// Middlewares

server.use(cors(corsOptions));
server.use(express.json());

// Endpoints
server.use("/cities", citiesRouter);

server.listen(port, async(req, res, next) => {
    console.log("Server is running on port: ", port);
    await connectDB();
    sequelize
    .sync({ logging: false })
    .then(() => {
      console.log("DB synced");
    })
    .catch((e) => {
      console.log(e);
    });
});
console.log(listEndpoints)
server.on("error", (error) => console.log("Server not running due to following error: ", error));
