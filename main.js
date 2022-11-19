// ====Scrooll change navbar====

window.addEventListener('scroll', () => {
    document.querySelector("nav").classList.toggle
    ('window-scroll', window.scrollY > 0)
})

// Show/hide faq question

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
   faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    //chenge icon
    const icon = faq.querySelector('.faq_icon i');
    if(icon.className === 'uil uil-plus'){
        icon.className = "uil uil-minus";
    }else{
        icon.className = "uil uil-plus";
    }
   })

})


// show/hide nav menu
const menu = document.querySelector(".nav-menu");
const openBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

openBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    openBtn.style.display = "none";
})

//close vav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);




// var menu = document.querySelector(".nav-menu");
// var closeBtn = document.querySelector("#close-menu-btn");
// var openBtn = document.querySelector("#open-menu-btn");

// function openMenuBtn(){
//     menu.style.display = "flex";
//     closeBtn.style.display = "inline-block";
//     openBtn.style.display = "none";

// }
