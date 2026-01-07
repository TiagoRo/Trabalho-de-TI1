// FERRAMENTAS INTERATIVAS

// Estrutura de links 
function analisarLink() {

    const url = document.getElementById("inputLink").value.trim();
    const caixaResultado = document.getElementById("resultadoLink");
    const titulo = document.getElementById("tituloResultado");
    const texto = document.getElementById("textoResultado");

    // Regex para verificar a sequência de números
    const regexIP = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;

    caixaResultado.style.display = "block";

    // Nada inserido
    if (url === "") {
        titulo.innerText = "Campo Vazio";
        texto.innerText = "Insira um link para verificar.";
    }
    
    // Link tem ip escrito ou @ 
    else if (regexIP.test(url) || url.includes("@")) {
        titulo.innerText = "Estrutura Suspeita";
        
        if (regexIP.test(url)) {
            texto.innerText = "O link tem um (IP) em vez de um domínio. É comum em tentativas de acesso direto a servidores maliciosos.";
        } else {
            texto.innerText = "O link tem um '@', que pode ser usado para esconder o verdadeiro destino do site.";
        }
    } 
    
    // É http
    else if (url.startsWith("http://")) {
        titulo.innerText = "Ligação Não Encriptada";
        texto.innerText = "O site usa o protocolo HTTP. Os dados não estão seguros.";
    } 
    
    // Se tem https
    else if (url.startsWith("https://")) {
        titulo.innerText = "Estrutura Segura";
        texto.innerText = "O link utiliza HTTPS e tem um formato de domínio válido. A conexão entre ti e o site é encriptada.";
    } 
    
    // Não é um link válido
    else {
        titulo.innerText = "Formato Desconhecido";
        texto.innerText = "O link inserido deve parece ser um link completo (começar com http:// ou https://).";
    }
}

// Password Generator
function criarPassword() {

    // Casos possiveis
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const symbol = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    // Oq quer o utilizador
    const length = document.getElementById("lengthPass").value;
    const hasUpper = document.getElementById("useUppercase").checked;
    const hasNumber = document.getElementById("useNumbers").checked;
    const hasSymbol = document.getElementById("useSymbols").checked;
    

    let allowedChars = lower;
    if (hasUpper) allowedChars += upper;
    if (hasNumber) allowedChars += number;
    if (hasSymbol) allowedChars += symbol;

    // Cria a password
    let password = "";
    for (let i = 0; i < length; i++) {

        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    document.getElementById("resultadoPassword").value = password;
}

// Password Checker
function checkPassword() {
    const password = document.getElementById("inputPassword").value;
    const texto = document.getElementById("resultadoTexto");
    
    let pontos = 0;

    // Regra n1 - Tem +7 caracteres ?
    if (password.length >= 8) pontos++;
    
    // Regra n2 - Tem Números ?
    if (/[0-9]/.test(password)) pontos++;
    
    // Regra n3 - Tem Símbolos ? Tudo oq não seja letra nem número
    if (/[^A-Za-z0-9]/.test(password)) pontos++;
    
    if (password.length === 0) {
        texto.innerText = "";
    } 
    else if (pontos <= 1) {
        texto.innerText = "Fraca 🔴";
    } 
    else if (pontos === 2) {
        texto.innerText = "Média 🟡";
    } 
    else {
        texto.innerText = "Forte 🟢";
    }
}