const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333
const mulheres = [
    {
        nome: 'Yendry',
        imagem: 'https://media.pitchfork.com/photos/60c7cb420eb25a9e7ea2263c/2:1/w_2560%2Cc_limit/CROP_YENDRY_007.jpg',
        minibio: 'Cantora, compositora, e feminista'
    },
    {
        nome: 'Ribeka Suzuki',
        imagem: '',
        minibio: 'Coordenadora Pedagógica e futura desenvolvedora back-end'
    },
    {
        nome: 'Angela Davis',
        imagem: '',
        minibio: 'Escritora e militante anti-racista e feminista'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
console.log('Servidor criado e rodando na porta ', porta)
}

app.use(router.get('/mulheres'), mostraMulheres)
app.listen(porta, mostraPorta) 