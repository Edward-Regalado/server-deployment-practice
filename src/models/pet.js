const { DataTypes } = require('sequelize');

function pet(db) {
    return db.define('Pet', {
        name: DataTypes.STRING,
        type: DataTypes.STRING,
        age: DataTypes.INTEGER,
    });
}

module.exports = {
    pet,
};
