const questions = [
  { q: "Com que frequência você se sente 100% confiante nos momentos íntimos?", options: ["Sempre", "Às vezes", "Raramente"] },
  { q: "Nota dificuldade em manter a firmeza quando mais precisa?", options: ["Nunca", "Às vezes", "Frequente"] },
  { q: "O estresse afeta sua capacidade de resposta na hora H?", options: ["Não afeta", "Um pouco", "Muito"] },
  { q: "Percebeu queda na sua energia ou desejo nos últimos meses?", options: ["Nenhuma", "Leve queda", "Queda notável"] },
  { q: "Como avalia sua satisfação geral com sua performance masculina?", options: ["Excelente", "Poderia melhorar", "Insatisfeito"] },
  { q: "Se existisse uma forma comprovada de reacender sua vitalidade, estaria pronto para agir?", options: ["Sim, com certeza", "Talvez", "Não no momento"] }
];

let currentQ = 0;
const qTitle = document.getElementById('quiz-question');
const qOptions = document.getElementById('quiz-options');
const qProgress = document.getElementById('quiz-progress');
const qCounter = document.getElementById('quiz-counter');
const affiliateLink = "https://ev.braip.com/pv/lipygmyz/afi7g63d1q";

function renderQuestion() {
  if (currentQ >= questions.length) return showResult();
  
  const q = questions[currentQ];
  qTitle.textContent = q.q;
  qOptions.innerHTML = '';
  
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = "w-full text-left p-4 rounded-lg border border-border bg-tertiary hover:border-accent hover:bg-accent hover:bg-opacity-10 transition-colors text-primary font-medium";
    btn.textContent = opt;
    btn.onclick = () => {
      currentQ++;
      renderQuestion();
    };
    qOptions.appendChild(btn);
  });
  
  const progress = ((currentQ) / questions.length) * 100;
  qProgress.style.width = `${progress}%`;
  qCounter.textContent = `Pergunta ${currentQ + 1} de ${questions.length}`;
}

function showResult() {
  qProgress.style.width = '100%';
  qCounter.textContent = "Analisando perfil...";
  qTitle.innerHTML = "Processando suas respostas...";
  qOptions.innerHTML = `
    <div class="flex flex-col items-center justify-center py-8">
      <div class="w-12 h-12 border-4 border-tertiary border-t-accent rounded-full animate-spin mb-4"></div>
      <p class="text-secondary font-medium animate-pulse">Avaliando pilares de vitalidade...</p>
    </div>
  `;
  
  setTimeout(() => {
    qCounter.textContent = "Concluído!";
    qTitle.innerHTML = "Seu perfil indica benefício claro de uma solução que atua nos pilares da vitalidade.";
    qTitle.className = "font-heading text-2xl font-bold mb-4 text-energy-500 leading-tight";
    
    const safeLink = encodeURI(affiliateLink);
    qOptions.innerHTML = `
      <p class="text-secondary mb-6 leading-relaxed">Com base nas suas respostas, é claro que você não está sozinho. Muitos homens enfrentam desafios semelhantes. Reacenda sua vitalidade, potência e confiança agora.</p>
      <a href="${safeLink}" class="block w-full text-center bg-accent hover:bg-accent-hover text-inverse font-bold py-4 px-6 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">
        CLIQUE AQUI PARA CONHECER A SOLUÇÃO
      </a>
    `;
  }, 2500);
}

// Inicializa o quiz ao carregar a página
document.addEventListener('DOMContentLoaded', renderQuestion);
