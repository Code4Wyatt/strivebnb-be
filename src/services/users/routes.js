import { Router } from "express";

import Users from "../../utils/db/models/users.js";

const usersRouter = Router();

usersRouter.post("/", async (req, res, next) => {
    try {
        const newUser = await Users.create(req.body);
        res.send(newUser);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

usersRouter.get("/", async (req, res, next) => {
    try {
        const getAllUsers = await Users.findAll();
        res.send(getAllUsers);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

export default usersRouter;