// const { DataTypes } = require('sequelize/types');
const sequelize = require('sequelize');

// const user = db.define('User', {
//     username: sequelize.DataTypes.STRING,
//     age: sequelize.DataTypes.INTEGER,
// });

function user(db) {
    return db.define('User', {
        username: sequelize.DataTypes.STRING,
        age: sequelize.DataTypes.STRING,

    });
}

module.exports = {
    user,
};
