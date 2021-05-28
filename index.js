//const http = require('http') /* Forma de cargar modulos en nodejs*/
const express = require('express') //importamos el modulo express
const app = express() //creamos la aplicacion

let notes = [
    {
        "id": 1,
        "content": "Me tengo que suscribir en Youtube",
        "date": "2020-05-30T17",
        "important": true,
    },
    {
        "id": 2,
        "content": "Tengo que estudiar las clases del fullstack bootcamp",
        "date": "2020-05-30T17",
        "important": true,
    },
    {
        "id": 3,
        "content": "Estudiar JavaScrip",
        "date": "2020-05-30T17",
        "important": true,
    }
]
/*const app = http.createServer((request,response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('Hola Edgardo')
} )*/

app.get('/', (request, response) => {
response.send('<h1> Hola Edgar </h1>')
})

app.get('/api/notes', (request,response) => {
    response.json(notes)
})

const PORT = 3001
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
