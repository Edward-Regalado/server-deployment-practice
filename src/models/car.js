const sequelize = require('sequelize');

// const car = db.define('Car', {
//     model: sequelize.DataTypes.STRING,
//     color: sequelize.DataTypes.STRING,
//     hp: sequelize.DataTypes.INTEGER,
// });

function car(db) {
    return db.define('Car', {
        model: sequelize.DataTypes.STRING,
        color: sequelize.DataTypes.STRING,
        hp: sequelize.DataTypes.STRING,
    });
}

module.exports = {
    car,
};
