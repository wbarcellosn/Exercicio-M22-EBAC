const dataDoEvento = new Date('Feb 02, 2024 19:00:00');
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(() => {
    const diaAtual = new Date();
    const timeStampDiaAtual = diaAtual.getTime();

    const tempoAteOEvento = timeStampDoEvento - timeStampDiaAtual

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(tempoAteOEvento / diasEmMs);

    const horasAteOEvento = Math.floor((tempoAteOEvento % diasEmMs) / horaEmMs);

    const minutosAteOEvento = Math.floor((tempoAteOEvento % horaEmMs) / minutoEmMs);

    const segundosAteOEvento = Math.floor((tempoAteOEvento % minutoEmMs) / 1000);

    document.getElementById('countdownInfos').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (diasAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('countdownInfos').innerHTML = 'Evento expirado'
    }

}, 1000)
