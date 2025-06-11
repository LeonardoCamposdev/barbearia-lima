import initMenuMobile from "./modules/menu-mobile.js";
import { initSlide1, initSlide2 } from "./modules/slide.js";
import initPluginScroll from "./modules/plugin-scroll.js";
import { initAnimacaoScrollLeft, initAnimacaoScrollRight, initAnimacaoScrollUp, initAnimacaoScrollDown } from "./modules/animacao-scroll.js";

initMenuMobile();
initPluginScroll();
initAnimacaoScrollLeft();
initAnimacaoScrollRight();
initAnimacaoScrollUp();
initAnimacaoScrollDown();
initSlide1();
initSlide2();


const containerLocalidade = document.querySelector('.container-teste-1');

    const iframe = containerLocalidade.querySelector(".li-iframe");

    containerLocalidade.addEventListener("mouseenter", () => {
      iframe.classList.add("active");
    });

    containerLocalidade.addEventListener("mouseleave", () => {
      iframe.classList.remove("active");
    });