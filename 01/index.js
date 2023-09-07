const express = require('express')

const app = express()

app.get('/somar', function (req, res) {
    const { num1, num2 } = req.query

    let resultado = Number(num1) + Number(num2)

    res.send(resultado.toString())
})


app.get('/subtrair', function (req, res) {
    const { num1, num2 } = req.query

    let resultado = Number(num1) - Number(num2)

    res.send(resultado.toString())
})

app.get('/multiplicar', function (req, res) {
    const { num1, num2 } = req.query

    let resultado = Number(num1) * Number(num2)

    res.send(resultado.toString())
})

app.get('/subtrair', function (req, res) {
    const { num1, num2 } = req.query

    let resultado = Number(num1) / Number(num2)

    res.send(resultado.toString())
})

app.listen(3000)