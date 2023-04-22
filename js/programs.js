const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");


    burger.addEventListener("click",() => {

        //toggle nav
        nav.classList.toggle("nav-active");

        //animate links
        navLinks.forEach((link,index)=>{
           if (link.style.animation) {
               link.style.animation = ""  
           } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
           }
         });

         //burger animation
         burger.classList.toggle("toggle");
        
    });    
}

navSlide();

var prevProject = document.querySelector(".arrowContainer1 #prevProject");
var nextProject = document.getElementById("nextProject");
var scrollRollCallImgs = document.querySelector(".scrollRollCallImgs")

function prevScrollBtn() {
    scrollRollCallImgs.scrollBy(-320, 0);
}

function nextScrollBtn() {
    scrollRollCallImgs.scrollBy(340, 0);
}

setInterval(() => {
    nextScrollBtn();
}, 3000);

prevProject.addEventListener("click", function() {
    prevScrollBtn();
});
nextProject.addEventListener("click", function() {
    nextScrollBtn();
});
