const { DataTypes } = require('sequelize');

function clothes(db) {
    return db.define('Clothes', {
        name: DataTypes.STRING,
        color: DataTypes.STRING,
        price: DataTypes.INTEGER,
    });
}

module.exports = {
    clothes,
};
