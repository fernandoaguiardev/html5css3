function abrir_menu(){
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    }
    else{
        itens.style.display = 'block'
    }
}
function mudou_resolucao(){
    if (window.innerWidth >= 992){
        itens.style.display = 'block'
    }
    else{
        itens.style.display = 'none'

    }
}