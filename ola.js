//a gente copia as informações do arquivo server porque precisamos da estrutura mínima do servidor
const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

//define o que aparece como resposta
function mostraOla(request, response) {
    response.send("Olá, mundo!")
}



function mostraPorta() {
console.log('Servidor criado e rodando na porta ', porta)
}

//dizer que deve mostrar a função mostraOla
app.use(router.get('/ola'), mostraOla) 
app.listen(porta, mostraPorta) 