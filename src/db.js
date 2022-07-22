// const { Sequelize, DataTypes } = require('sequelize');
const { Sequelize } = require('sequelize');

const { user } = require('./models/user');
const { car } = require('./models/car');
const { pet } = require('./models/pet');
const sequelize = require('sequelize');

// create the database connection
// 'sqlite::memory: is called a "connection string". In this example, we are using in-memory data storage.
// const db = new Sequelize('sqlite::memory:');

// Only use the db.sync() in development
// creates the database and reconfigure all of the columns.
// this can be dangerous so only use in development.

let connection_string;

// let memory = 'sqlite::memory:'; // In memory only
// let local = 'sqlite:../db.sqlite'; // local persistent file
// let postgres = 'postgres://postgresdb.server:5432/my_db_name'; // Production postgres with username and password

// const db = new Sequelize(local);
// const db = new Sequelize(memory);
// const db = new Sequelize(production);

switch (process.env.NODE_ENV) {
    case 'production':
        connection_string = process.env.DATABASE_URL;
        break;
    case 'dev':
        connection_string = 'sqlite::memory';
        break;
    case 'staging':
            // connection_string = `sqlite:${process.env.SQLITE_FILE ?? '../db'}`;
        // break;
    default:
        connection_string = `sqlite:${process.env.SQLITE_FILE ?? '../db'}`;
        break;
        }

const db = new Sequelize(connection_string, {
    // for postgres only
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});

db.sync();

module.exports = {
    db: sequelize,
    User: user(db),
    Car: car(db),
    Pet: pet(db),
};
