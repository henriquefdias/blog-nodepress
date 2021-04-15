const Sequelize = require("sequelize");

const connection = new Sequelize('nodepress', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;