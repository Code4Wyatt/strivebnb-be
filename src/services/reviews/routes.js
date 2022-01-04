import { Router } from "express";

import Reviews from "../../utils/db/models/reviews.js";

const reviewsRouter = Router();

reviewsRouter.post("/", async (req, res, next) => {
    try {
        const newReview = await Reviews.create(req.body);
        res.send(newReview);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

export default reviewsRouter;