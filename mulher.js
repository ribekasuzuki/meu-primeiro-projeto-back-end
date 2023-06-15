const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Yendry',
        imagem: 'https://media.pitchfork.com/photos/60c7cb420eb25a9e7ea2263c/2:1/w_2560%2Cc_limit/CROP_YENDRY_007.jpg',
        minibio: 'Cantora, compositora, e feminista'
    })
    //json é um jeito de enviar pela internet várias informações. Como estamos devolvendo objeto, se usa json 
}

function mostraPorta() {
console.log('Servidor criado e rodando na porta ', porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta) 