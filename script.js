const menuToggle =
document.getElementById("menu-toggle");

const navLinks =
document.getElementById("nav-links");

menuToggle.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

const reveals =
document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

reveals.forEach(section=>{

const top =
section.getBoundingClientRect().top;

const visible = 150;

if(top < window.innerHeight - visible){

section.classList.add("active");

}

});

});

document.querySelectorAll("section").forEach(sec=>{
sec.classList.add("reveal");
});

const form =
document.querySelector("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Thank You! Your booking request has been submitted."
);

form.reset();

});