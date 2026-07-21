// ===============================
// NAVBAR SHADOW ON SCROLL
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 8px 25px rgba(0,0,0,0.08)";

    }
    else{

        navbar.style.boxShadow = "none";

    }

});



// ===============================
// FADE-IN SECTIONS ON SCROLL
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

    section.style.transition=
    "all 0.7s ease";

    observer.observe(section);

});



// ===============================
// CLOSE MOBILE MENU (FUTURE READY)
// ===============================

document.querySelectorAll(".nav-links a")
.forEach(link=>{

link.addEventListener("click",()=>{

    document
    .querySelector(".nav-links")
    ?.classList.remove("active");

});

});



// ===============================
// CURRENT YEAR FOOTER
// ===============================

const year = new Date().getFullYear();

const footer = document.querySelector("footer");

if(footer){

footer.innerHTML +=
`<p>Updated ${year}</p>`;

}
