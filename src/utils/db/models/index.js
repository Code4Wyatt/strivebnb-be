import Cities from "./cities.js";
import Houses from "./houses.js";
import Reviews from "./reviews.js";
import Users from "./users.js";

// One to many, house has many reviews
Houses.hasMany(Reviews, { onDelete: "CASCADE" });
Reviews.belongsTo(Houses, { onDelete: "CASCADE" });

// One to many, users have many reviews
Users.hasMany(Reviews, { onDelete: "CASCADE" });
Reviews.belongsTo(Users, { onDelete: "CASCADE" });

// One to many, cities have many houses
Cities.hasMany(Houses, { onDelete: "CASCADE" });
Houses.belongsTo(Cities, { onDelete: "CASCADE" });


//---- Many to many below ? ---- //

// One to many, houses have many users
Houses.hasMany(Users, { onDelete: "CASCADE" });
Users.belongsToMany(Houses, { onDelete: "CASCADE" });

// One to many, users have many houses
Users.hasMany(Houses, { onDelete: "CASCADE" });
Houses.belongsToMany(Users, { onDelete: "CASCADE" });