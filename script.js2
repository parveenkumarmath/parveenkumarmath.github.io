// ===============================
// Navbar shadow on scroll
// ===============================

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.08)";

    }

    else{

        navbar.style.boxShadow = "none";

    }

});




// ===============================
// Smooth reveal animation
// ===============================

const sections = document.querySelectorAll(".section");


const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}


});


},

{
threshold:0.15
}

);



sections.forEach(section=>{


section.style.opacity="0";

section.style.transform="translateY(30px)";

section.style.transition="0.7s ease";


observer.observe(section);


});




// ===============================
// Current year in footer
// ===============================

const year = new Date().getFullYear();


const footer = document.querySelector("footer p");


if(footer){

footer.innerHTML =
"© " + year + " Parveen Kumar";

}
