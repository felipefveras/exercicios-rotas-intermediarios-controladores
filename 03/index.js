const express = require('express')
const app = express()

//const imoveis = require('./imoveis')

const { get, getPorId } = require('./controladores/imoveis.js')



app.get('/imoveis', get)

app.get('/imoveis/:id', getPorId)

app.listen(8000)