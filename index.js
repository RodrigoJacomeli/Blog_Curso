const Express = require('express')
const App = Express()
const BodyParser = require('body-parser')
const connection = require('./database/database')

// View Engine
App.set('view engine', 'ejs')

// Static
App.use(Express.static('public'))

// Body Parser
App.use(BodyParser.urlencoded({ extended: false }))
App.use(BodyParser.json())

// DataBase
connection
    .authenticate()
    .then(() => {
        console.log('Connection in database successfully!!!')
    }).catch((error) => {
        console.log(error)
    })

App.get('/', (req, res) => {
    res.render('index')
})

App.listen(3000, () => {
    console.log('Server is running!!!')
})