const Sequelize = require('sequelize')
const connection = require('../../database/database')
const Category = require('../categories/Category')

const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

// Relacionamento entre tabelas
Category.hasMany(Article) // Uma Categoria tem muitos Artigos
Article.belongsTo(Category) // Um Artigo pertece a uma Categoria

// Command from create table
//Article.sync({ force: true})

module.exports = Article