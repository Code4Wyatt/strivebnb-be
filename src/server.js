import express from "express";
import listEndpoints from "express-list-endpoints";
import sequelize, { testConnection } from "./db/connect.js";
import cors from "cors";


const server = express();
const port = process.env.PORT || 5009;

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


// Tables

import Users from "./db/models/users.js";
import Cities from "./db/models/cities.js";
import Houses from "./db/models/houses.js";

// Table Relations

// -- Many to many between houses and users
Houses.belongsToMany(Users, { through: HouseCategory,
    onDelete: "CASCADE",
});
Users.belongsToMany(Houses, { through: HouseCategory,
onDelete: "CASCADE",
});

// -- One to many cities to houses, one city has many houses
Cities.hasMany(Houses, { onDelete: "CASCADE" });
Houses.belongsTo(Cities, {onDelete: "CASCADE" });



