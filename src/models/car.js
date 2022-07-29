const { DataTypes } = require('sequelize');

function car(db) {
    return db.define('Car', {
        model: DataTypes.STRING,
        color: DataTypes.STRING,
        hp: DataTypes.INTEGER,
    });
}

module.exports = {
    car,
};
