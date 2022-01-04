import { Router } from "express";
import Houses from "../../utils/db/models/houses.js";
const housesRouter = Router();

housesRouter.post("/", async (req,res,next) => {
    try {
        console.log(req.body);
        const house = await Houses.create(req.body);
        res.send(house);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

housesRouter.get("/", async (req, res, next) => {
    try {
        const allHouses = await Houses.findAll();
        res.send(allHouses);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

export default housesRouter;

 