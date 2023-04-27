var service = {};

service.calcularProdutorioIterativo = calcularProdutorioIterativo;
service.calcularProdutorioRecursivo = calcularProdutorioRecursivo;

module.exports = service;

function calcularProdutorioIterativo(index, limiteSuperior){
    var resultado = 0;
    for (var i = index; i < limiteSuperior; i++){
        resultado += i + (1/i);
    }
    return resultado;
}

function calcularProdutorioRecursivo(index, limiteSuperior, resultado = 0){
    resultado += index + (1/index);
    if (index < limiteSuperior){
        index++;
        return calcularProdutorioRecursivo(index, limiteSuperior, resultado);
    }
    
    return resultado;
}