// PLAYGROUND

// Ransomware Visual
function ativarRansomware() {
    // Ecrã vermelho
    const ecra = document.getElementById("ecraRansomware");
    
    // Torna ecrã visível
    ecra.style.display = "block";
    
    // Mete o browser em fullscreen
    document.documentElement.requestFullscreen().catch((e) => {});
}

function restaurarMain() {

    const ecra = document.getElementById("ecraRansomware");
    
    // Esconde ecrã
    ecra.style.display = "none";
    
    // Sai do ecrã inteiro
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }

    alert("Restaurado! Não dês download ao que não tens a certeza que é fiável. GTA 6 só sai em 2026, espera malandro");
}

// XSS

function copiarExemplo() {
    
    const exemplo = document.getElementById("payloadExemplo").innerText;

    document.getElementById("inputXSS").value = exemplo;
}


function testarXSS() {
    const textoUtilizador = document.getElementById("inputXSS").value;
    
    const feed = document.getElementById("resultadoXSS");
    
    // Injeta o código
    feed.innerHTML = textoUtilizador;

    // Limpa a caixa 
    document.getElementById("inputXSS").value = "";
}

// Text Encrypt
function encryptMensagem() {
    const textoOriginal = document.getElementById("textoNormal").value;
    const output = document.getElementById("textoEncriptado");
    
    let textoCifrado = "";

    // For para cada letra da mensagem
    for (let i = 0; i < textoOriginal.length; i++) {
        // Obter o ASCII da letra 
        let codigoLetra = textoOriginal.charCodeAt(i);
        
        // Se for um espaço fica espaço na mesma
        if (codigoLetra === 32) {
            textoCifrado += " ";
        } else {
            // Soma 3 ao código do caracter para fazer a encriptação de César
            textoCifrado += String.fromCharCode(codigoLetra + 3);
        }
    }

    output.value = textoCifrado;
}