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

var prevProjects = document.querySelectorAll(".arrowContainer1 .prevProject");
var nextProjects = document.querySelectorAll(".arrowContainer1 .nextProject");
var scrollRollCallImgs = document.querySelectorAll(".scrollRollCallImgs")


function prevScrollBtn() {
    scrollRollCallImgs.forEach(scrollRollCallImg => {
        scrollRollCallImg.scrollBy(-280, 0);
    });
    
}

function nextScrollBtn() {
    scrollRollCallImgs.forEach(scrollRollCallImg => {
        scrollRollCallImg.scrollBy(320, 0);
    });
   
}

setInterval(() => {
    nextScrollBtn();
}, 60000);



prevProjects.forEach(prevProject => {
    prevProject.addEventListener("click", function() {
        prevScrollBtn();
    });
});


nextProjects.forEach(nextProject => {
    nextProject.addEventListener("click", function() {
        nextScrollBtn();
    });
});


