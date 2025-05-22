export function initAnimacaoScrollLeft() {
  const animacaoElement = document.querySelectorAll('[data-anime="scroll-left"]');

  function animaScroll() {
    const windowMetade = window.innerHeight * 0.7;
    animacaoElement.forEach((item) => {
      const distanciaTopo = item.getBoundingClientRect().top - windowMetade;

      if (distanciaTopo < 0) {
        item.classList.add("ativo");
      }
    });
  }

  window.addEventListener("scroll", animaScroll);
}

export function initAnimacaoScrollRight() {
  const animacaoElement = document.querySelectorAll('[data-anime="scroll-right"]');
  
  function animaScroll() {
    const windowMetade = window.innerHeight * 0.7;
    animacaoElement.forEach((item) => {
      const distanciaTopo = item.getBoundingClientRect().top - windowMetade;

      if (distanciaTopo < 0) {
        item.classList.add("ativo");
      }
    });
  }

  window.addEventListener("scroll", animaScroll);
}


export function initAnimacaoScrollUp() {
  const animacaoElement = document.querySelectorAll('[data-anime="scroll-up"]');
  
  function animaScroll() {
    const windowMetade = window.innerHeight * 0.7;
    animacaoElement.forEach((item) => {
      const distanciaTopo = item.getBoundingClientRect().top - windowMetade;

      if (distanciaTopo < 0) {
        item.classList.add("ativo");
      }
    });
  }

  window.addEventListener("scroll", animaScroll);
}



export function initAnimacaoScrollDown() {
  const animacaoElement = document.querySelectorAll('[data-anime="scroll-down"]');
  
  function animaScroll() {
    const windowMetade = window.innerHeight * 0.7;
    animacaoElement.forEach((item) => {
      const distanciaTopo = item.getBoundingClientRect().top - windowMetade;

      if (distanciaTopo < 0) {
        item.classList.add("ativo");
      }
    });
  }

  window.addEventListener("scroll", animaScroll);
}
