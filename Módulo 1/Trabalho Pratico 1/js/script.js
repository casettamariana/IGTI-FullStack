window.addEventListener('load', start);

var inputRange = null;
var inputNumerico = null;
var inputTexto = null;

const vetUnidades = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
const vetDezenas = ['dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
const vetDezenasUm = ['onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
const vetCentenas = ['Cento', 'Duzentos', 'Trezentos', 'Quatrocentos', 'Quinhentos', 'Seissentos', 'Setecentos', 'Oitocentos', 'Novecentos'];

function start(){
  inputRange = document.querySelector('#range');
  inputNumerico = document.querySelector('#valorNumerico');
  inputTexto = document.querySelector('#valorTextual');

  iniciarCapturaInput(); 
  updateValueInput();
}

function iniciarCapturaInput(){
  inputRange.addEventListener('input', updateValueInput);
}

function updateValueInput(){
  preencherValorNumerico();
  preencherValorTextual();
}

function preencherValorNumerico(){
  inputNumerico.value = inputRange.value;
}

function preencherValorTextual(){
  var valueNumber = inputRange.value;
  var valueString = valueNumber.toString();

  var primeiraCasa = valueString.substr(0,1);
  var segundaCasa = valueString.substr(1,1);
  var terceiraCasa = valueString.substr(2,1);
  
  switch(valueString.length){
    case 1:
      insereUnidade(valueNumber);
      break;
    case 2:
      var terceiraCasa = valueString.substr(1,1);
      insereDezena(segundaCasa, terceiraCasa);
      break;
    case 3:
      insereCentena(primeiraCasa, segundaCasa, terceiraCasa);
      break;
  }
}

function insereUnidade(indexUnidade) {
  var un = vetUnidades[indexUnidade]; 
  inputTexto.value = `${un}`; 
}

function insereDezena(indexDezena, indexUnidade){
  var un = vetUnidades[indexUnidade]; 
  var dez = vetDezenas[indexDezena]; 
  console.log(indexDezena)
  if(indexDezena == 1){
    console.log('hey');
  } else {
    inputTexto.value = `${dez} e ${un}`; 
  }
}

function insereCentena(indexCentena, indexDezena, indexUnidade){
  var un = vetUnidades[indexUnidade]; 
  var dez = vetDezenas[indexDezena]; 
  var cen = vetCentenas[indexCentena]; 
  inputTexto.value = `${cen} e ${dez} ${un}`; 
}