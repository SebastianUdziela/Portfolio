const homeSlider = document.querySelector(".home_slider");
const btn = document.querySelector(".nav_button")
const btnClose = document.querySelector(".btn_close")
const navLinks = document.querySelectorAll(".navigation li")
const header = document.querySelector("header")
const imgAbout = document.querySelector(".about")
let changeOpacity = 0
let flag = false



// Slider
const changeSliderTextName = () =>{
    let Fadeout = setInterval( () => {
        if (homeSlider.firstElementChild.style.opacity != 1) {
            homeSlider.firstElementChild.style.opacity  = changeOpacity 
            homeSlider.lastElementChild.style.opacity = changeOpacity 
            changeOpacity += 0.1
         } else {
             clearInterval(Fadeout)
             setTimeout( () => {
                 changeOpacity = 0;
                 homeSlider.firstElementChild.style.opacity = changeOpacity
                 homeSlider.lastElementChild.style.opacity = changeOpacity 
                 changeSliderProfesion() 
             }, 2000);
             
         }  
    }, 50);
    homeSlider.firstElementChild.textContent = "Hello, I'm "
    homeSlider.lastElementChild.textContent = "Sebastian Udziela";
}

const changeSliderProfesion = () => {
    
    let Fadeout = setInterval( () => {
        if (homeSlider.firstElementChild.style.opacity != 1) {
            homeSlider.firstElementChild.style.opacity  = changeOpacity 
            homeSlider.lastElementChild.style.opacity = changeOpacity 
            changeOpacity += 0.1
         } else {
             clearInterval(Fadeout)
         }  
    }, 50);

    homeSlider.firstElementChild.textContent = "I'm"
    homeSlider.lastElementChild.textContent = "Junior Front-End Developer"
}

setTimeout(changeSliderTextName, 1000)

// Menu

const handleNavBtn = () => {
    if (!flag) {
        flag = true
        document.querySelector(".navigation").classList.add("nav_toggle")
    } else {
        document.querySelector(".navigation").classList.remove("nav_toggle")
        flag = false
    }
    
}
navLinks.forEach(element => {
    element.addEventListener("click", function(){
        document.querySelector(".navigation").classList.remove("nav_toggle")
        flag = false
    })
})


btnClose.addEventListener("click", handleNavBtn)
btn.addEventListener("click", handleNavBtn) 

