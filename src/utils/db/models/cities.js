import sequelize from "../index.js";

import s from "sequelize";

const { DataTypes } = s;

const Cities = sequelize.define("Cities", {
    cityId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export default Cities;