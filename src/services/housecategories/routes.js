import { Router } from "express";

import HouseCategory from "../../utils/db/models/housecategory.js";

const houseCategoriesRouter = Router();

houseCategoriesRouter.post("/", async (req, res, next) => {
    try {
        const newHouseCategory = await HouseCategory.create(req.body);
        res.send(newHouseCategory);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

export default houseCategoriesRouter;