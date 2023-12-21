
document.addEventListener('DOMContentLoaded' , () => {
   var h1 = document.getElementsByTagName ('h1') [0]
   var botoes = document.getElementsByTagName ('button')

   for( i=0; i<botoes.length; i++){
    const btn = botoes[i]
    btn.addEventListener('click' , () => {
        h1.style.color = btn.dataset.cor
        h1.innerHTML = btn.innerHTML
    })

   }




   })



