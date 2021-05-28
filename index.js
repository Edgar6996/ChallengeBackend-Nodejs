//Importamos el modulo express
const express = require('express')
//const { database } =require('./keys')
/*const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('backend-node', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});*/
//inicializamos
const app = express()


//configuraciones
app.set('port', process.env.PORT || 4000)


//Middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())


/*variables globales
app.use((req, res, next) => {
    app.locals.success = req.flash('success')
    next()
})*/

//Rutas
app.use('/auth', require('./routes/autenticacion'))
//app.use(require('./routes/authentication'))


//Archivos publicos
//app.use(express.static(path.join(__dirname, 'public')))
//iniciar servidor
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado en el puerto ', app.get('port'))
})