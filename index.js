const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./src/database/database')

// Controllers
const categoriesController = require('./src/controller/categories/CategoriesController')
const articlesController = require('./src/controller/articles/articlesController')

// Models
const Category = require('./src/Models/categories/Category')
const Article = require('./src/Models/articles/Article')

// View Engine
app.set('view engine', 'ejs')

// Static
app.use(express.static('public'))

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// DataBase
connection
    .authenticate()
    .then(() => {
        console.log('Connection in database successfully!!!')
    }).catch((error) => {
        console.log(error)
    })

app.use('/', categoriesController)
app.use('/', articlesController)

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log('Server is running!!!')
})