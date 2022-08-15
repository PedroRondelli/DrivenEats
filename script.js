function selecionar(divescolha){
   const escolhido = document.querySelector(".selecionado ")
   if(escolhido!== null){
    escolhido.classList.toggle("selecionado")
   }
   divescolha.classList.toggle("selecionado")
}
function selecionarbebida(escolha){
    const escolhido = document.querySelector(".bebidaselecionada ")
    if(escolhido!== null){
     escolhido.classList.toggle("bebidaselecionada")
    }
    escolha.classList.toggle("bebidaselecionada")
 }
 function selecionarsobremesa(escolhasobre){
    const escolhida = document.querySelector(".sobremesaselecionada ")
    if(escolhida!== null){
     escolhida.classList.toggle("sobremesaselecionada")
    }
    escolhasobre.classList.toggle("sobremesaselecionada")
 }


