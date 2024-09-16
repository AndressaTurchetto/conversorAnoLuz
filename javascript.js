function converterQuilometrosParaAnosLuz(quilometros, quilometrosPorAnoLuz) {
    return quilometros / quilometrosPorAnoLuz;
}

function calcularTempo(event) {
    event.preventDefault();

    var distanciaEmQuilometros = parseFloat(document.getElementById('distancia').value);
    var velocidadeEmQuilometrosPorAnoLuz = parseFloat(document.getElementById('velocidade').value);

    if (isNaN(distanciaEmQuilometros) || isNaN(velocidadeEmQuilometrosPorAnoLuz) || velocidadeEmQuilometrosPorAnoLuz === 0) {
        document.getElementById('resultado').innerHTML = "Por favor, insira valores válidos.";
        return;
    }

    var distanciaEmAnosLuz = converterQuilometrosParaAnosLuz(distanciaEmQuilometros, velocidadeEmQuilometrosPorAnoLuz);
    var tempoNecessario = distanciaEmAnosLuz / velocidadeEmQuilometrosPorAnoLuz;

    document.getElementById('resultado').innerHTML =
        "A distância de " + distanciaEmQuilometros + " quilômetros é equivalente a aproximadamente " +
        distanciaEmAnosLuz.toFixed(3) + " anos-luz.<br>" +
        "Com uma velocidade de " + velocidadeEmQuilometrosPorAnoLuz +
        " quilômetros por ano-luz, levaria cerca de " + tempoNecessario.toFixed(3) + " anos para viajar.";
}

document.getElementById('conversor-form').addEventListener('submit', calcularTempo);
