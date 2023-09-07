const imoveis = require('../dados/imoveis.js')

function get(req, res) {

    res.send(imoveis)

}

function getPorId(req, res) {
    const imovelEncontrado = imoveis.find(function (imovel) {
        return imovel.id === Number(req.params.id)
    })
    res.send(imovelEncontrado)
}

module.exports = {
    get, getPorId
}