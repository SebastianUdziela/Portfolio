/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
const homeSlider = document.querySelector('.home_slider');
const btn = document.querySelector('.nav_button');
const btnClose = document.querySelector('.btn_close');
const navLinks = document.querySelectorAll('.navigation li');
let changeOpacity = 0;
let flag = false;

// Slider

const changeSliderProfesion = () => {
  const Fadeout = setInterval(() => {
    if (homeSlider.firstElementChild.style.opacity != 1) {
      homeSlider.firstElementChild.style.opacity = changeOpacity;
      homeSlider.lastElementChild.style.opacity = changeOpacity;
      changeOpacity += 0.1;
    } else {
      clearInterval(Fadeout);
    }
  }, 50);

  homeSlider.firstElementChild.textContent = "I'm";
  homeSlider.lastElementChild.textContent = 'Junior Front-End Developer';
};

const changeSliderTextName = () => {
  const Fadeout = setInterval(() => {
    if (homeSlider.firstElementChild.style.opacity != 1) {
      homeSlider.firstElementChild.style.opacity = changeOpacity;
      homeSlider.lastElementChild.style.opacity = changeOpacity;
      changeOpacity += 0.1;
    } else {
      clearInterval(Fadeout);
      setTimeout(() => {
      changeOpacity = 0;
      homeSlider.firstElementChild.style.opacity = changeOpacity;
      homeSlider.lastElementChild.style.opacity = changeOpacity;
        changeSliderProfesion();
      }, 2000);
    }
  }, 50);
};


setTimeout(changeSliderTextName, 1000);

// Menu

const handleNavBtn = () => {
  if (!flag) {
    flag = true;
    document.querySelector('.navigation').classList.add('nav_toggle');
  } else {
    document.querySelector('.navigation').classList.remove('nav_toggle');
    flag = false;
  }
};
navLinks.forEach((element) => {
  element.addEventListener('click', () => {
    document.querySelector('.navigation').classList.remove('nav_toggle');
    flag = false;
  });
});


btnClose.addEventListener('click', handleNavBtn);
btn.addEventListener('click', handleNavBtn);
