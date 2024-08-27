const navLinks = document.querySelector(".nav-links")
const humbeger = document.querySelector(".toggle-btn")
humbeger.addEventListener("click",()=>{
    navLinks.classList.toggle("active")
    humbeger.classList.toggle("active")
})