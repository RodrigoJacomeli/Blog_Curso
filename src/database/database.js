const Sequelize = require('sequelize')

const connection = new Sequelize('blog', 'root', 'templars', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection