/***********************
 * DADOS DOS QUIZZES
 ***********************/
const quizzes = {
  conceitos: [
    {
      question: "Qual é a principal função de uma senha forte?",
      options: [
        "Aumentar a velocidade do computador",
        "Impedir acessos não autorizados",
        "Eliminar vírus automaticamente",
        "Substituir o antivírus"
      ],
      correct: 1
    },
    {
      question: "Qual destas práticas é insegura?",
      options: [
        "Usar símbolos",
        "Usar letras maiúsculas",
        "Reutilizar a mesma senha em vários sites",
        "Criar senhas longas"
      ],
      correct: 2
    },
    {
      question: "O que torna uma senha mais segura?",
      options: [
        "Ser curta",
        "Ser previsível",
        "Ser longa e complexa",
        "Usar apenas números"
      ],
      correct: 2
    },
    {
      question: "O que é a Autenticação de Dois Fatores (2FA)?",
      options: [
        "Um tipo de antivírus",
        "Uma segunda camada de verificação",
        "Uma senha duplicada",
        "Uma firewall"
      ],
      correct: 1
    },
    {
      question: "Qual é um exemplo de segundo fator no 2FA?",
      options: [
        "Nome do utilizador",
        "Pergunta secreta",
        "Código enviado para o telemóvel",
        "Endereço IP"
      ],
      correct: 2
    },
    {
      question: "Porque é que o 2FA é importante?",
      options: [
        "Elimina a necessidade de senha",
        "Aumenta a velocidade da internet",
        "Dificulta acessos mesmo com a senha roubada",
        "Bloqueia vírus"
      ],
      correct: 2
    },
    {
      question: "O que é um backup?",
      options: [
        "Uma cópia de segurança dos dados",
        "Um antivírus",
        "Uma firewall",
        "Um sistema operativo"
      ],
      correct: 0
    },
    {
      question: "Porque são importantes os backups?",
      options: [
        "Para libertar memória RAM",
        "Para recuperar dados após ataques ou falhas",
        "Para navegar anonimamente",
        "Para melhorar o Wi-Fi"
      ],
      correct: 1
    },
    {
      question: "Onde é seguro guardar backups?",
      options: [
        "Apenas no ambiente de trabalho",
        "No mesmo disco do sistema",
        "Em discos externos ou na cloud",
        "No navegador"
      ],
      correct: 2
    },
    {
      question: "Qual destes não é um método de backup?",
      options: [
        "Disco externo",
        "Cloud",
        "Pen USB",
        "Histórico do navegador"
      ],
      correct: 3
    },
    {
      question: "Com que frequência devem ser feitos backups?",
      options: [
        "Nunca",
        "Apenas uma vez",
        "Regularmente",
        "Só após um ataque"
      ],
      correct: 2
    },
    {
      question: "Qual destas combinações é mais segura?",
      options: [
        "Senha fraca sem 2FA",
        "Senha forte com 2FA",
        "Sem senha",
        "Mesma senha para tudo"
      ],
      correct: 1
    },
    {
      question: "Qual destas senhas é mais segura?",
      options: [
        "123456",
        "joao1999",
        "Q!9aZ#2mL@",
        "abcdef"
      ],
      correct: 2
    },
    {
      question: "O que pode acontecer sem backups?",
      options: [
        "Nada",
        "Internet mais lenta",
        "Perda permanente de dados",
        "Conta bloqueada"
      ],
      correct: 2
    },
    {
      question: "Qual é a primeira linha de defesa digital?",
      options: [
        "Firewall",
        "Antivírus",
        "Senha forte",
        "VPN"
      ],
      correct: 2
    }
  ],

  ameacas: [
    {
      question: "O que é malware?",
      options: [
        "Um sistema operativo",
        "Software malicioso",
        "Uma firewall",
        "Uma rede segura"
      ],
      correct: 1
    },
    {
      question: "Qual destes é um tipo de malware?",
      options: [
        "VPN",
        "Backup",
        "Firewall",
        "Ransomware"
      ],
      correct: 3
    },
    {
      question: "O que faz um ransomware?",
      options: [
        "Espalha anúncios",
        "Apaga ficheiros",
        "Criptografa ficheiros e pede resgate",
        "Aumenta a segurança"
      ],
      correct: 2
    },
    {
      question: "Como entra normalmente o ransomware num sistema?",
      options: [
        "Atualizações oficiais",
        "Backups",
        "E-mails maliciosos",
        "Firewalls"
      ],
      correct: 2
    },
    {
      question: "Qual é o principal objetivo do phishing?",
      options: [
        "Roubar dados pessoais",
        "Destruir o computador",
        "Instalar jogos",
        "Aumentar a navegação"
      ],
      correct: 0
    },
    {
      question: "Qual é um sinal comum de phishing?",
      options: [
        "Mensagens urgentes com links suspeitos",
        "Endereço totalmente confiável",
        "Mensagem personalizada",
        "Certificado HTTPS válido"
      ],
      correct: 0
    },
    {
      question: "O que é spyware?",
      options: [
        "Antivírus",
        "Software que espia o utilizador",
        "Backup automático",
        "Firewall"
      ],
      correct: 1
    },
    {
      question: "Qual é o principal risco do spyware?",
      options: [
        "Internet lenta",
        "Roubo de informações pessoais",
        "Desligar o computador",
        "Bloquear o ecrã"
      ],
      correct: 1
    },
    {
      question: "O que é adware?",
      options: [
        "Publicidade intrusiva",
        "Software de segurança",
        "Vírus destrutivo",
        "Ferramenta de backup"
      ],
      correct: 0
    },
    {
      question: "Um sinal típico de adware é:",
      options: [
        "Perda de ficheiros",
        "Pop-ups constantes",
        "Sistema desligado",
        "Ecrã preto"
      ],
      correct: 1
    },
    {
      question: "O que é engenharia social?",
      options: [
        "Ataque técnico",
        "Manipulação psicológica",
        "Vírus automático",
        "Firewall humana"
      ],
      correct: 1
    },
    {
      question: "A engenharia social explora principalmente:",
      options: [
        "Falhas de software",
        "A confiança das pessoas",
        "Backups fracos",
        "Firewalls antigas"
      ],
      correct: 1
    },
    {
      question: "Qual é um exemplo de engenharia social?",
      options: [
        "Atualização automática",
        "VPN ativa",
        "E-mail a fingir ser do banco",
        "Firewall ligado"
      ],
      correct: 2
    },
    {
      question: "Como reduzir o risco de malware?",
      options: [
        "Clicar em todos os links",
        "Manter o sistema atualizado",
        "Desligar a internet",
        "Ignorar avisos"
      ],
      correct: 1
    },
    {
      question: "Qual atitude é mais segura?",
      options: [
        "Abrir anexos desconhecidos",
        "Desconfiar de mensagens suspeitas",
        "Usar Wi-Fi público",
        "Ignorar atualizações"
      ],
      correct: 1
    }
  ],

  internet: [
    {
      question: "Qual é a principal função de uma firewall?",
      options: [
        "Eliminar vírus",
        "Monitorizar e bloquear tráfego suspeito",
        "Aumentar a velocidade da internet",
        "Criar passwords"
      ],
      correct: 1
    },
    {
      question: "O que uma firewall tenta impedir?",
      options: [
        "Acessos não autorizados",
        "Falhas de energia",
        "Problemas de hardware",
        "Erros do utilizador"
      ],
      correct: 0
    },
    {
      question: "Onde pode existir uma firewall?",
      options: [
        "Apenas em servidores",
        "Só em empresas",
        "Em computadores, routers e redes",
        "Apenas na cloud"
      ],
      correct: 2
    },
    {
      question: "O que significa VPN?",
      options: [
        "Virtual Public Network",
        "Verified Private Network",
        "Virtual Private Network",
        "Visual Protection Network"
      ],
      correct: 2
    },
    {
      question: "Qual é a principal vantagem de usar uma VPN?",
      options: [
        "Aumentar o sinal Wi-Fi",
        "Esconder a localização e encriptar os dados",
        "Eliminar vírus",
        "Bloquear anúncios"
      ],
      correct: 1
    },
    {
      question: "Quando é recomendável usar uma VPN?",
      options: [
        "Em casa apenas",
        "Em redes Wi-Fi públicas",
        "Com o computador desligado",
        "Ao fazer backups"
      ],
      correct: 1
    },
    {
      question: "Qual é um risco das redes Wi-Fi públicas?",
      options: [
        "Perda de bateria",
        "Dados podem ser intercetados",
        "Internet lenta",
        "Danos físicos"
      ],
      correct: 1
    },
    {
      question: "Porque é perigoso aceder ao banco em Wi-Fi público?",
      options: [
        "O banco fecha automaticamente",
        "A ligação é lenta",
        "Os dados podem ser capturados",
        "O teclado não funciona"
      ],
      correct: 2
    },
    {
      question: "O que melhora a segurança do Wi-Fi doméstico?",
      options: [
        "Usar senha forte no router",
        "Deixar a rede aberta",
        "Partilhar a senha",
        "Usar nome padrão"
      ],
      correct: 0
    },
    {
      question: "O que é encriptação de dados?",
      options: [
        "Apagar dados",
        "Esconder dados para leitura segura",
        "Copiar dados",
        "Aumentar velocidade"
      ],
      correct: 1
    },
    {
      question: "Qual ligação é mais segura?",
      options: [
        "Wi-Fi público aberto",
        "Wi-Fi doméstico protegido",
        "Rede desconhecida",
        "Qualquer rede aberta"
      ],
      correct: 1
    },
    {
      question: "Qual é a função do router?",
      options: [
        "Guardar ficheiros",
        "Distribuir internet",
        "Eliminar vírus",
        "Criar backups"
      ],
      correct: 1
    },
    {
      question: "O que pode acontecer se o Wi-Fi não estiver protegido?",
      options: [
        "Nada",
        "Apenas internet lenta",
        "Acesso indevido à rede",
        "Melhor sinal"
      ],
      correct: 2
    },
    {
      question: "Qual prática melhora a segurança da rede?",
      options: [
        "Atualizar o firmware do router",
        "Usar senha simples",
        "Desligar a firewall",
        "Manter rede aberta"
      ],
      correct: 0
    },
    {
      question: "O que é um ataque Man-in-the-Middle?",
      options: [
        "Ataque físico",
        "Interceção da comunicação",
        "Vírus destrutivo",
        "Publicidade excessiva"
      ],
      correct: 1
    }
  ],

  privacidade: [
    {
      question: "Para além de guardar preferências, para que servem os cookies?",
      options: [
        "Rastrear a navegação do utilizador",
        "Eliminar vírus",
        "Aumentar a velocidade",
        "Proteger o computador"
      ],
      correct: 0
    },
    {
      question: "O que são cookies na navegação web?",
      options: [
        "Programas maliciosos",
        "Ficheiros criados pelos sites",
        "Ferramentas de backup",
        "Firewalls"
      ],
      correct: 1
    },
    {
      question: "Qual é um risco do rastreamento online?",
      options: [
        "Danos físicos",
        "Perda de bateria",
        "Monitorização de hábitos",
        "Falhas de hardware"
      ],
      correct: 2
    },
    {
      question: "O que significa rastreamento online?",
      options: [
        "Eliminar histórico",
        "Aumentar segurança",
        "Bloquear anúncios",
        "Seguir a atividade do utilizador"
      ],
      correct: 3
    },
    {
      question: "Porque os sites usam rastreamento?",
      options: [
        "Publicidade e análise de comportamento",
        "Danificar dispositivos",
        "Bloquear contas",
        "Criar vírus"
      ],
      correct: 0
    },
    {
      question: "Aceitar todos os cookies significa:",
      options: [
        "Menos anúncios",
        "Maior recolha de dados",
        "Internet mais rápida",
        "VPN ativa"
      ],
      correct: 1
    },
    {
      question: "O que é a localização num dispositivo?",
      options: [
        "Nome do utilizador",
        "Endereço do site",
        "Posição geográfica",
        "Senha do Wi-Fi"
      ],
      correct: 2
    },
    {
      question: "Para que servem os dados de localização?",
      options: [
        "Eliminar vírus",
        "Formatar disco",
        "Aumentar desempenho",
        "Publicidade e personalização"
      ],
      correct: 3
    },
    {
      question: "Um risco de partilhar localização constante é:",
      options: [
        "Exposição da rotina",
        "Internet lenta",
        "Perda de sinal",
        "Maior bateria"
      ],
      correct: 0
    },
    {
      question: "O que faz o modo de navegação anónima?",
      options: [
        "Protege contra hackers",
        "Apaga histórico e cookies locais",
        "Garante anonimato total",
        "Substitui VPN"
      ],
      correct: 1
    },
    {
      question: "O modo privado NÃO garante:",
      options: [
        "Apagar histórico",
        "Eliminar cookies",
        "Anonimato total",
        "Evitar registos locais"
      ],
      correct: 2
    },
    {
      question: "Quem ainda pode ver a atividade online?",
      options: [
        "Ninguém",
        "Apenas o computador",
        "O teclado",
        "Sites e fornecedor de internet"
      ],
      correct: 3
    },
    {
      question: "O que melhora a privacidade online?",
      options: [
        "Rever permissões das apps",
        "Aceitar cookies",
        "Partilhar localização",
        "Wi-Fi público aberto"
      ],
      correct: 0
    },
    {
      question: "O que são permissões de aplicações?",
      options: [
        "Tipos de vírus",
        "Atualizações",
        "Autorizações de acesso a dados",
        "Backups"
      ],
      correct: 2
    },
    {
      question: "Qual é uma boa prática de privacidade?",
      options: [
        "Ignorar permissões",
        "Instalar qualquer app",
        "Partilhar dados pessoais",
        "Ler e limitar permissões"
      ],
      correct: 3
    }
  ]
};

/***********************
 * VARIÁVEIS
 ***********************/
let currentQuiz = [];
let currentQuestion = 0;
let score = 0;

/***********************
 * INICIAR QUIZ
 ***********************/
function startQuiz(theme) {
  currentQuiz = quizzes[theme];
  currentQuestion = 0;
  score = 0;

  document.getElementById("theme-selection").style.display = "none";
  document.getElementById("quiz-content").style.display = "block";
  document.getElementById("result-content").style.display = "none";

  document.getElementById("total-questions").textContent = currentQuiz.length;
  document.getElementById("total-score").textContent = currentQuiz.length;

  loadQuestion();
}

/***********************
 * CARREGAR PERGUNTA
 ***********************/
function loadQuestion() {
  const q = currentQuiz[currentQuestion];

  document.getElementById("current-question-num").textContent =
    currentQuestion + 1;

  document.getElementById("question-text").textContent = q.question;

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.className = "btn-option";
    btn.textContent = option;
    btn.onclick = () => selectAnswer(btn, index);
    optionsContainer.appendChild(btn);
  });

  document.getElementById("next-btn").style.display = "none";
}

/***********************
 * SELECIONAR RESPOSTA
 ***********************/
function selectAnswer(button, index) {
  const correctIndex = currentQuiz[currentQuestion].correct;
  const buttons = document.querySelectorAll(".btn-option");

  buttons.forEach(btn => btn.disabled = true);

  if (index === correctIndex) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
    buttons[correctIndex].classList.add("correct");
  }

   updateStats();
   
  document.getElementById("next-btn").style.display = "inline-block";
}

/***********************
 * PRÓXIMA PERGUNTA
 ***********************/
function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < currentQuiz.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

/***********************
 * RESULTADOS
 ***********************/
function showResults() {
  document.getElementById("quiz-content").style.display = "none";
  document.getElementById("result-content").style.display = "block";

  document.getElementById("score").textContent = score;
  document.getElementById("stat-correct").textContent = score;
  document.getElementById("stat-wrong").textContent =
    currentQuiz.length - score;

  const percent = Math.round((score / currentQuiz.length) * 100);
  document.getElementById("stat-percent").textContent = percent;
}

/***********************
 * REINICIAR
 ***********************/
function restartQuiz() {
  document.getElementById("result-content").style.display = "none";
  document.getElementById("quiz-content").style.display = "none";
  document.getElementById("theme-selection").style.display = "block";
}


function updateStats() {
  document.getElementById("stat-correct").textContent = score;
  document.getElementById("stat-wrong").textContent =
    currentQuestion + 1 - score;

  const percent = Math.round((score / (currentQuestion + 1)) * 100);
  document.getElementById("stat-percent").textContent = percent;
}
