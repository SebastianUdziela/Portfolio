/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
const homeSlider = document.querySelector('.home_slider');
const btn = document.querySelector('.nav_btn');
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('.navigation li');
let changeOpacity = 0;

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
  console.log('dd');
  header.classList.toggle('nav_toggle');
};

navLinks.forEach((element) => {
  element.addEventListener('click', () => {
    header.classList.remove('nav_toggle');
  });
});


// btnClose.addEventListener('click', handleNavBtn);
btn.addEventListener('click', handleNavBtn);
