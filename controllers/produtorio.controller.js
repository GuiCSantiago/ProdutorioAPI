var express = require('express');
var router = express.Router();

var produtorioService = require('services/produtorio.service');

// routes
router.get('/calcularProdutorio', calcularProdutorio);

module.exports = router;

async function calcularProdutorio(req, res) {
   var limiteInferior = parseInt(req.params.limiteInferior);
   var limiteSuperior = parseInt(req.params.limiteSuperior);
   var opcao = req.params.opcao;
   var resultado = 0;
   if (opcao === "iterativo")
      res.send(produtorioService.calcularProdutorioIterativo(limiteInferior, limiteSuperior));
   else
      res.send(produtorioService.calcularProdutorioRecursivo(limiteInferior, limiteSuperior, 0));
}