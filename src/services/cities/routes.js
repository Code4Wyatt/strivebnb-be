import { Router } from 'express';

const citiesRouter = Router();

citiesRouter.post("/", async (req, res, next) => {
    try {
        console.log(req.body);
        const city = await City.create(req.body);
        res.send(city);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

citiesRouter.get("/", async (req, res, next) => {
    try {
        const allCities = await City.findAll({include: [ Houses ]});
        res.send(allCities);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

citiesRouter.put("/:id", async (req, res, next) => {
    try {
        const updateCities = await City.update(req.body, {
            where: { id: req.params.id},
            returning: true,
        })
    } catch (error) {
        console.log(error);
        next(error);
    }
});

citiesRouter.delete("/:id", async (req, res, next) => {
    try {
        const dataToDelete = await City.destroy({ 
            where: { id: req.params.id,},
        });
        res.send(dataToDelete);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

export default citiesRouter;


