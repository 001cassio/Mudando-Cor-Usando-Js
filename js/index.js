var botao = document.getElementsByClassName("botao");
var titulo = document.getElementsByClassName("titulo");
var tudo = document.getElementsByTagName("body")


function tema1(){
    if(tudo[0].classList ==! "escuro"){
        tudo[0].classList.add("escuro");
        titulo[0].innerHTML="tema: black";
        botao[0].classList.add("botao-escuro");
        botao[0].innerHTML ="White";
        
    } else{
        console.log("ola");
        tudo[0].classList.remove("escuro");
        titulo[0].innerHTML ="tema: white";
        botao[0].classList.remove("botao-escuro");
        botao[0].innerHTML = "black";
    }
}
botao[0].addEventListener('click',tema1);