export  function initSlide1() {
  const btnSlider = document.querySelectorAll("[data-btn1]");
  console.log(btnSlider)
  const slider = document.querySelector("[data-slider1]");

  let scrollPosition = 0;

  function controlSlide({ target: { id } }) {
    const sliderWidth = slider.clientWidth; // usa o valor atual da largura visível

    if (id === "nextSlide1") {
      scrollPosition += sliderWidth;
    } else if (id === "previousSlide1") {
      scrollPosition -= sliderWidth;
    }

    // Evita ultrapassar os limites do scroll
    scrollPosition = Math.max(0, Math.min(scrollPosition, slider.scrollWidth - sliderWidth));

    slider.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  }

  btnSlider.forEach((btn) => {
    btn.addEventListener("click", controlSlide);
  });
}

export  function initSlide2() {
  const btnSlider = document.querySelectorAll("[data-btn2]");
  console.log(btnSlider)
  const slider = document.querySelector("[data-slider2]");

  let scrollPosition = 0;

  function controlSlide({ target: { id } }) {
    const sliderWidth = slider.clientWidth; // usa o valor atual da largura visível

    if (id === "nextSlide2") {
      scrollPosition += sliderWidth;
    } else if (id === "previousSlide2") {
      scrollPosition -= sliderWidth;
    }

    // Evita ultrapassar os limites do scroll
    scrollPosition = Math.max(0, Math.min(scrollPosition, slider.scrollWidth - sliderWidth));

    slider.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  }

  btnSlider.forEach((btn) => {
    btn.addEventListener("click", controlSlide);
  });
}