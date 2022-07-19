// const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');

// const db = new Sequelize('sqlite::memory');

// const pet = (sequelize, DataTypes) => sequelize.define('Pet', {
//     name: DataTypes.STRING,
//     type: DataTypes.STRING,
//     age: DataTypes.INTEGER,
// });

// const pet = sequelize.define('Pet', {
//     // description of properties that the model has.
//     name: sequelize.DataTypes.STRING,
//     type: sequelize.DataTypes.STRING,
//     age: sequelize.DataTypes.INTEGER,
// });

function pet(db) {
    return db.define('Pet', {
        name: DataTypes.STRING,
        type: DataTypes.STRING,
        age: DataTypes.INTEGER,
    });
}

// const pet = db.define('Pet', {
//     name: DataTypes.STRING,
//     type: DataTypes.STRING,
//     age: DataTypes.INTEGER,
// })

module.exports = {
    pet,
};
