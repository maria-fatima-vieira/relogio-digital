function atualizarRelogio() {
    let agora = new Date();

    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();
    // Adicionar zero na frente se for menor que 10
    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

// Atualiza a cada 1 segundo 
setInterval(atualizarRelogio, 1000);

// Chama uma vez para não começar em 00:00:00
atualizarRelogio();