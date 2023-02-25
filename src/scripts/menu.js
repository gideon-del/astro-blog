const hambugger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav-links')
hambugger.addEventListener('click',() => {
   nav.classList.toggle('expanded')
})