
const filter_btns = document.querySelectorAll(".filter-btn");
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");
const anchors = document.querySelectorAll('a[href*="#"]') //плавний скролынг
const footer_input = document.querySelector(".footer-input");

footer_input.addEventListener("focus", () => {
  footer_input.classList.add("focus");
}); 

footer_input.addEventListener("blur", () => {
  if(footer_input.value != "") return;
  footer_input.classList.remove("focus");
}); 

//код до плавного скролінгу
for (let anchor of anchors){
  anchor.addEventListener("click",function(event){
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
};


//preloader
function preloader() {
  $(() => {
    setInterval(() =>{
      let p = $('.preloader');
      p.css('opacity', 0);

      setInterval(
        () => p.remove(),
        parseInt(p.css('--duraction')) * 1000
      );

    }, 1000);
    

  });
};

preloader();

filter_btns.forEach( btn => btn.addEventListener("click", () => {
    filter_btns.forEach(button => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;
    //console.log(filterValue);  перевірка
    
    $(".grid").isotope({filter: filterValue});
  })
);

$(".grid").isotope({
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
  transitionDuration: "0.6s",
});

window.addEventListener("scroll", () => {
  skillsEffect();
});

function checkScroll(el) {
  let rect = el.getBoundingClientRect();
  if (window.innerHeight >= rect.top + el.offsetHeight) return true;
  return false;
}

function skillsEffect() {
  if (!checkScroll(skills_wrap)) return;
  skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
}

//menu hamburder
function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scroling");
}

hamburger_menu.addEventListener("click", () =>{
  if(!navbar.classList.contains("open")){
    navbar.classList.add("open");
    document.body.classList.add("stop-scroling");
  }
  else{
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));

//menu hamburger



$('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    transitionDuration: "0.6s",
})


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '100px',
  duration: 2000,
  reset: true
});

/*SCROLL HOME*/
sr.reveal('.header-content',{}); 
sr.reveal('.column-1',{delay: 300}); 
sr.reveal('.btn',{delay: 400}); 
sr.reveal('.column-2',{ interval: 400}); 

/*SCROLL SERVICES*/
sr.reveal('.services ',{}); 
sr.reveal('.section-header',{delay: 400}); 
sr.reveal('.cards',{delay: 400}); 

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio',{}); 
sr.reveal('.section-body',{}); 


/*SCROLL BLOG*/
sr.reveal('.blog-wrapper',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.grid-4-col',{interval: 200}); 
sr.reveal('.bottom-footer',{interval: 200});
sr.reveal('.followme-wrap',{interval: 200});


