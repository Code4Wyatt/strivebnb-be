import sequelize from "../index.js";

import s from "sequelize";

const { DataTypes } = s;

const Users = sequelize.define("Users", {
    userId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNulls: false,
    },
    nationality: {
        type: DataTypes.TEXT,
        allowNulls: false,
    },
});

export default Users;