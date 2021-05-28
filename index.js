//Importamos el modulo express
const express = require('express')

//const { database } =require('./keys')

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
/*app.use(require('./routes'))
app.use(require('./routes/authentication'))*/


//Archivos publicos
//app.use(express.static(path.join(__dirname, 'public')))
//iniciar servidor
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado en el puerto ', app.get('port'))
})