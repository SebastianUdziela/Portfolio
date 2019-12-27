const img = document.querySelector("#img_about")
const aboutHeading = document.querySelector(".content_about h2")
const singleProject = document.querySelectorAll('.single_project')


let config = {
    root: null,
    rootMargin: '0px',
    threshold: 0
  };

  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };
  
const onChange = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
            img.style.animation = 'anim 1s forwards ease-out'   
            aboutHeading .style.animation = 'anim 1s forwards ease-out'  
        } else {
            img.style.animation = ''
            aboutHeading .style.animation = ''  
        }
      });
}

const handleSingleProject = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.style.animation = "changeOpacity 3s forwards ease-out"
        } else {
            entry.target.style.animation = ""
      }});
}


let observerAbout = new IntersectionObserver(onChange, config);
let observeSibnleProject = new IntersectionObserver(handleSingleProject, options)
  
singleProject.forEach(element => {
    observeSibnleProject.observe(element)
})

  observerAbout.observe(imgAbout);
