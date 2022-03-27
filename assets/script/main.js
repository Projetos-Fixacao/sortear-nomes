//SELECIONOU AS TAGS 
// INTERCEPTAR O CLIQUE NO BOTÃO 
// PEGAR AS INFORMAÇÕES QUE ESTÃO DENTRO DO CAMPO 

const btnSortear         = document.querySelector(".sort-btn")
const textarea           = document.querySelector("textarea")
const tagResultado       = document.querySelector(".result strong")
const popUpResultado     = document.querySelector(".result")
const btnFechar          = document.querySelector(".fechar")

//PEGANDO DADOS DO FOMRULÁRIO
function pegarDadosFormulario(){   
    //RECUPERANDO VALOR DO CAMPO (TEXTAREA)
    const valorCampo  = textarea.value
    const listaElementos  = valorCampo.split(",")
    const tamanhoArray= listaElementos.length
    const posicaoElemento = gerarNumeroAleatorio(tamanhoArray)
    const elemento        = listaElementos[posicaoElemento]
    mostrarResultado(elemento)
    textarea.value = ""
}

//INTERCEPTANDO O CLIQUE / EXECUTANDO FUNÇÃO
btnSortear.addEventListener("click", pegarDadosFormulario)

//GERANDO NÚMERO ALEATÓRIO
function gerarNumeroAleatorio(tamanhoArray){
    //RETORNA O NÚMERO
    return  Math.floor(Math.random() * (tamanhoArray - 0) + 0)
}

function mostrarResultado(elemento){
    tagResultado.innerText = `Resultado: ${elemento}`
    popUpResultado.classList.add("mostrarResultado")   
}

function fecharPopUp(){
    popUpResultado.classList.remove("mostrarResultado")
}

btnFechar.addEventListener("click", fecharPopUp)

