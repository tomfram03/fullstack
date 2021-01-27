const sequeLize = require('sequelize');

const connect = new sequeLize('api', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connect;