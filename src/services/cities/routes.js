import { Router } from 'express';
// import { Op } from 'sequelize';
import Cities from '../../utils/db/models/cities.js';
import Houses from '../../utils/db/models/houses.js';

const citiesRouter = Router();

citiesRouter.post("/", async (req, res, next) => {
    try {
        const city = await Cities.create(req.body);
        res.send({ city });
    } catch (error) {
        console.log(error);
        next(error);
    }
});

citiesRouter.get("/", async (req, res, next) => {
    try {
        const allCities = await Cities.findAll();
        res.send(allCities);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

// citiesRouter.put("/:id", async (req, res, next) => {
//     try {
//         const updateCities = await City.update(req.body, {
//             where: { id: req.params.id},
//             returning: true,
//         })
//     } catch (error) {
//         console.log(error);
//         next(error);
//     }
// });

// citiesRouter.delete("/:id", async (req, res, next) => {
//     try {
//         const dataToDelete = await City.destroy({ 
//             where: { id: req.params.id,},
//         });
//         res.send(dataToDelete);
//     } catch (error) {
//         console.log(error);
//         next(error);
//     }
// });

export default citiesRouter;


