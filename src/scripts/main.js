AOS.init();

const dataDoEvento = new Date("Dec 12, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampDoAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampDoAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const HorasEmMs = 1000 * 60 * 60;
    const MinutosEmMs =  1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / HorasEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % HorasEmMs) / MinutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % MinutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento Expirado'
    }
}, 1000)