import sequelize from "../index.js";

import s from "sequelize";

const { DataTypes } = s;

const Houses = sequelize.define("Houses", {
    houseId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    houseName: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    houseDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    guestCapacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    amountOfRooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    amountOfBeds: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    amenities: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    houseLocation: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    country: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    pricePerNight: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    houseCategoryId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Houses;