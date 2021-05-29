const  db = require('../models')
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')



router.post('/login', async (req, res) => {
    try {
        const usuario = await db.Usuarios.findOne(
            {
                attributes: ['correo', 'contrasenia'],
                where: {
                    correo: req.body.correo,
                    contrasenia: req.body.contrasenia
                }
        })
        jwt.sign({usuario}, 'secretkey', {expiresIn: '1h'}, (err, token) => {
            res.json({
                message: "Usuario Logueado",
                token
            });
        });

    } catch (e) {
        res.status(403).send('No se puede loguear')
    }

})

//registro
router.post('/register',  async (req, res) => {
    try {
         await db.Usuarios.create({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correo: req.body.correo,
            contrasenia: req.body.contrasenia
        })
        res.status(200).send('Usuario Creado')
    } catch (e) {
        res.status(400).send('No se puede crear el usuario')
    }
})
module.exports = router