const Sequelize = require('sequelize')

const connection = new Sequelize('BLOG', 'rodrigo', 'Banguela)&', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection