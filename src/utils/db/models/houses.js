import sequelize from "../index.js";

import s from "sequelize";

const { DataTypes } = s;

const Houses = sequelize.define("Houses", {
    houseId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    pricePerNight: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

export default Houses;