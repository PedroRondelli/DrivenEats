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
 function aparecericone(numeracaoicone){
    const checado = document.querySelector(".check")
    if(checado!== null){
        checado.classList.remove("check")
        checado.classList.add("vasco")
    }
    const checando = document.querySelector(numeracaoicone)
    checando.classList.remove("vasco")
    checando.classList.add("check")
}
function aparecericonebebida(numeracaobebida){
    const checadobebida = document.querySelector(".checkbebida")
    if(checadobebida!== null){
        checadobebida.classList.remove("checkbebida")
        checadobebida.classList.add("vasco")
    }
    const checkpresent = document.querySelector(numeracaobebida)
    checkpresent.classList.remove("vasco")
    checkpresent.classList.add("checkbebida")
}
function aparecericonesobremesa(numeracaosobremesa){
    const checadosobremesa = document.querySelector(".checksobremesa")
    if(checadosobremesa!== null){
        checadosobremesa.classList.remove("checksobremesa")
        checadosobremesa.classList.add("vasco")
    }
    const checkatual = document.querySelector(numeracaosobremesa)
    checkatual.classList.remove("vasco")
    checkatual.classList.add("checksobremesa")

}

