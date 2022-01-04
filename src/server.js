import express from "express";
import listEndpoints from "express-list-endpoints";
// import sequelize, { testDbConnection } from "./utils/db/connect.js";
import { connectDB } from "./utils/db/index.js";
import cors from "cors";
import citiesRouter from "./services/cities/routes.js";
import housesRouter from "./services/houses/routes.js";
import houseCategoriesRouter from "./services/housecategories/routes.js";
import reviewsRouter from "./services/reviews/routes.js";
import usersRouter from "./services/users/routes.js";
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
server.use("/houses", housesRouter);
server.use("/housecategories", houseCategoriesRouter);
server.use("/reviews", reviewsRouter);
server.use("/users", usersRouter);


server.listen(port, async(req, res, next) => {
    console.log("Server is running on port: ", port);
    console.log(listEndpoints(server));

    await connectDB();

});

server.on("error", (error) => console.log("Server not running due to following error: ", error));
