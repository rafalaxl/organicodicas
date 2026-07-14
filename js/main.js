// Reading Progress & Sticky CTA Visibility
window.addEventListener('scroll', () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
  
  const progressBar = document.getElementById('reading-progress-bar');
  if (progressBar) progressBar.style.width = scrolled + '%';
  
  const stickyCta = document.getElementById('sticky-cta');
  const ctaContainer = document.getElementById('cta-container');
  if (stickyCta && ctaContainer) {
    const ctaTop = ctaContainer.getBoundingClientRect().top;
    if (winScroll > 400 && ctaTop > window.innerHeight) {
      stickyCta.classList.remove('translate-y-32', 'opacity-0', 'pointer-events-none');
    } else {
      stickyCta.classList.add('translate-y-32', 'opacity-0', 'pointer-events-none');
    }
  }
});

// Rastreamento de início de Quiz no Meta Pixel
document.addEventListener('DOMContentLoaded', () => {
  const startQuizBtn = document.getElementById('start-quiz-btn');
  if (startQuizBtn) {
    startQuizBtn.addEventListener('click', () => {
      if (typeof fbq !== 'undefined') {
        fbq('trackCustom', 'InicioDoQuiz');
      }
    });
  }
});

