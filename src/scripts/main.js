AOS.init();

function getProximoAniversario() {
    const hoje = new Date();
    let ano = hoje.getFullYear();

    const aniversario = new Date(`${ano}-03-31T20:00:00`);
    if (hoje > aniversario) {
        ano++;
    }

    return new Date(`${ano}-03-31T20:00:00`);
}

const dataDoEvento = getProximoAniversario();
const timeStampDoEvento = dataDoEvento.getTime();

const spanQuando = document.getElementById('data-evento');
spanQuando.innerText = `${dataDoEvento.toLocaleDateString('pt-BR')} às 20h`;

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampDoAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampDoAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const dias = Math.floor(distanciaAteOEvento / diaEmMs);
    const horas = Math.floor((distanciaAteOEvento % diaEmMs) / horasEmMs);
    const minutos = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMs);
    const segundos = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'A festa começou!';
    }
}, 1000);
