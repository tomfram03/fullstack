const sequelize = require('sequelize');
const connect = require('./conexao');

const products = connect.define('products', {
    name: {
        type: sequelize.STRING,
        allowNull: false,
    },
    desc: {
        type: sequelize.STRING,
        allowNull: false,
    },
})

products.sync({force: false})
.then(() => {console.log('Tabela criada')})
.catch(() => {console.log('ERRO')})

module.exports = products

