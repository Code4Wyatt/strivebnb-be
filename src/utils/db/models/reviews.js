import sequelize from "../index.js";

import s from "sequelize";

const { DataTypes } = s;

const Review = sequelize.define('review', {
    reviewId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    houseId: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    userId: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
});

export default Review;