const db = require('../models')
const express = require('express')
const router = express.Router()

const jwt = require('jsonwebtoken')

router.get('/', verifyToken, async (req ,res) => {

    const personajes = await db.Personaje.findAll(
        {
            attributes: ['imagen', 'nombre']
        })
    res.send(personajes)
})

router.post('/create', verifyToken, async (req, res) => {
    try {
        await db.Personaje.create({
            imagen: req.body.imagen,
            nombre: req.body.nombre,
            edad: req.body.edad,
            historia: req.body.historia,
            pelicula_o_serie: req.body.pelicula_o_serie
        })
        res.status(200).send('Personaje Creado')
    } catch (e) {
        res.status(400).send('No se puede crear el Personaje')
    }
})

router.get('/edit/:id',verifyToken, async (req, res) => {
    let id = req.params.id
    await db.Personaje.findOne({
        where: {
            id: id
        }
    }).then(personaje => {
        res.json(personaje)
    })
})

router.put('/edit/:id',verifyToken, async (req, res) => {

    let id = req.params.id
    let nuevosDatos = req.body

    await db.Personaje.findOne({
        where: {
            id: id
        }
    }).then(personaje => {
        personaje.update(nuevosDatos)
            .then(personajeEditado => {
                res.json(personajeEditado)
            })
    })

})

router.delete('/delete/:id', verifyToken, async (req, res) => {
    let id = req.params.id
    await db.Personaje.destroy({
        where: {
            id: id
        }
    }).then( () => {
        res.json('Personaje Eliminado')
    })
} )

router.get('/details', verifyToken, async (req ,res) => {

    await db.Personaje.findAll().then(personajes => {
        res.json(personajes)
    })
})

// Authorization: Bearer <token>
function verifyToken(req, res, next){
    const bearerHeader =  req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined'){
        const bearerToken = bearerHeader.split(" ")[1];
        req.token  = bearerToken;
        next();
    }else{
        res.status(403).send('Necesita loguearse');
    }
}




module.exports = router