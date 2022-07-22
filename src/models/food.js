const { DataTypes } = require('sequelize');

function food(db) {
    return db.define('Food', {
        name: DataTypes.STRING,
        price: DataTypes.INTEGER,
    });
}

module.exports = {
    food,
};
