const Sequelize = require('sequelize')
const connection = require('../../database/database')

const Category = connection.define('categories', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

// Command from create table
//Category.sync({ force: true})

module.exports = Category