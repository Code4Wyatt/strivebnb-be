import sequelize from "../index.js";

import s from "sequelize";

const { DataTypes } = s;

const Cities = sequelize.define("Cities", {
    cityId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    cityName: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    country: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
});

export default Cities;