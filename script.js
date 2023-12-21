const hamburguer = document.querySelector(".hamburguer")
const nav =document.querySelector(".nav")

/* adiciona o evento onclick no botão hamburguer */
hamburguer.addEventListener('click', () => {
    /* alterna: adiciona ou remove a classe 'active' em nav*/
    nav.classList.toggle("active")
    console.log(nav.classList.value)
})


