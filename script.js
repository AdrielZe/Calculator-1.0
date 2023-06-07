const number = document.querySelectorAll("[data-numero]");
const visor = document.querySelectorAll("[data-visor]");
const sinal = document.querySelectorAll("[data-sinal]")
const resultado = document.querySelector("[data-conta]")
let numberToOperate;
let temporaryVariable = 0;
let currentSignal = 0;

resultado.addEventListener("click",() =>{
    if(currentSignal == 1){
    temporaryVariable += numberToOperate;
  } else if (currentSignal == 2){
    temporaryVariable -= numberToOperate;
  } else if (currentSignal == 3){
    temporaryVariable = temporaryVariable * numberToOperate;
  } else if (currentSignal == 4){
    console.log(temporaryVariable, numberToOperate)
    temporaryVariable = temporaryVariable / numberToOperate;
  }
  visor[0].textContent = temporaryVariable;
  numberToOperate = temporaryVariable;;
  temporaryVariable = 0;
})

sinal.forEach( (element) => {
  element.addEventListener("click", (evento) => {
    verificaOperacao(evento.target.dataset.sinal)
  })
})

number.forEach( (element) => {
  element.addEventListener("click", (evento) => {
    atualizaVisor(evento.target.dataset.numero)
    console.log(numberToOperate)
  })//Insere os numeros no visor da calculadora
})

function atualizaVisor(number){ 
  visor.forEach( (elemento) =>{
  elemento.textContent = elemento.textContent + (number);
  numberToOperate = parseFloat(elemento.textContent);
  console.log(numberToOperate);
  });
}

function verificaOperacao(operacao){
  if(operacao == "+"){
    temporaryVariable += numberToOperate;
    currentSignal = 1;
  } else if (operacao == "-"){
    temporaryVariable -= - (numberToOperate);
    currentSignal = 2;
  } else if (operacao == "*"){
    temporaryVariable = 1;
    temporaryVariable *= numberToOperate;
    currentSignal = 3;
  } else if (operacao == "/"){
    temporaryVariable = numberToOperate;
    currentSignal = 4;
  }
  visor[0].textContent = "";
} 