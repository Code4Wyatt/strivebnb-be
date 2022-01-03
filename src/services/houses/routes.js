import { Router } from "express";

const housesRouter = Router();

housesRouter.post("/", async (req,res,next) => {
    try {
        console.log(req.body);
        const house = await House.create(req.body);
        res.send(house);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

housesRouter.get("/", async (req, res, next) => {
    try {
        const allHouses = await House.findAll();
        res.send(allHouses);
    } catch (error) {
        console.log(error);
        next(error);
    }
}); `   `

export default housesRouter;

 