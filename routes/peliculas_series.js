const db = require('../models')
const express = require('express')
const router = express.Router()

const jwt = require('jsonwebtoken')

router.get('/', verifyToken, async (req ,res) => {

    await db.Pelicula_o_Serie.findAll(
        {
            attributes: ['imagen', 'titulo', 'fecha_de_creacion']
        }).then( peli_serie => {
            res.json(peli_serie)
    })
})

router.post('/create', verifyToken, async (req, res) => {
    try {
        await db.Pelicula_o_Serie.create({
            imagen: req.body.imagen,
            titulo: req.body.titulo,
            fecha_de_creacion: req.body.fecha_de_creacion,
            calificacion: req.body.calificacion,
        }).then( peli_serie => {
            res.json(peli_serie)
        })
        res.status(200)
    } catch (e) {
        res.status(400).send('No se puede crear la Pelicula/Serie')
    }
})

router.get('/edit/:id',verifyToken, async (req, res) => {
    let id = req.params.id
    await db.Pelicula_o_Serie.findOne({
        where: {
            id: id
        }
    }).then(peli_serie => {
        res.json(peli_serie)
    })
})

router.put('/edit/:id',verifyToken, async (req, res) => {

    let id = req.params.id
    let nuevosDatos = req.body

    await db.Pelicula_o_Serie.findOne({
        where: {
            id: id
        }
    }).then(peli_serie => {
        peli_serie.update(nuevosDatos)
            .then(peli_serie_editada => {
                res.json(peli_serie_editada)
            })
    })

})

router.delete('/delete/:id', verifyToken, async (req, res) => {
    let id = req.params.id
    await db.Pelicula_o_Serie.destroy({
        where: {
            id: id
        }
    }).then( () => {
        res.json('Pelicula/Serie Eliminado')
    })
} )

router.get('/details', verifyToken, async (req ,res) => {

    await db.Pelicula_o_Serie.findAll().then(peli_serie => {
        res.json(peli_serie)
    })
})

// Authorization: Bearer <token>
function verifyToken (req, res, next) {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        next();
    } else {
        res.status(403).send('Necesita loguearse');
    }
}




module.exports = router