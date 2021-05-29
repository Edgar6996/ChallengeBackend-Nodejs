//Importamos el modulo express
const express = require('express')

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
app.use('/characters', require('./routes/personajes'))
app.use('/movies', require('./routes/peliculas_series'))


//iniciar servidor
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado en el puerto ', app.get('port'))
})