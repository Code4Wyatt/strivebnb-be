import sequelize from "../index.js";

import s from "sequelize";

const { DataTypes } = s;

const HouseCategory = sequelize.define("HouseCategory", { 
    houseCategoryId: { 
        primaryKey: true, 
        type: DataTypes.UUID, 
        defaultValue: DataTypes.UUIDV4,
    },
    categoryName: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
});

export default HouseCategory;