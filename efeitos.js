var CaracteresMinusculos = 0;
var CaracteresMaiusculos = 0;
var CaracteresSimbolos             = 0;
var quantidadeNumeros              = 0; 
var TotalCriteriosAprovados   = 0;


var spansenhaInserida;                  
var spanCaracteresTotal;      
var spanCaracteresMinusculos; 
var spanCaracteresMaiusculos; 
var spanCaracteresSimbolos;             
var spanQuantidadeNumeros;              
var spanCriteriosAprovados;             


var CorAceitavel   = 'green';
var corNaoAceitavel = 'red';

window.onload = init;

function init() {

  spansenhaInserida                  = document.getElementById('spansenhaInserida');  
  spanCaracteresTotal      = document.getElementById('spanCaracteresTotal');
  spanCaracteresMinusculos = document.getElementById('spanCaracteresMinusculos');
  spanCaracteresMaiusculos = document.getElementById('spanCaracteresMaiusculos');
  spanCaracteresSimbolos             = document.getElementById('spanCaracteresSimbolos');
  spanQuantidadeNumeros              = document.getElementById('spanQuantidadeNumeros'); 
  spanCriteriosAprovados             = document.getElementById('spanCriteriosAprovados'); 

  var edtSenha     = document.getElementById('edtSenha');
  edtSenha.onkeyup = validarSenha;
}

function validarSenha() {

  var senhaInserida                  = this.value;
  var quantidadeCaracteresTotal      = senhaInserida.length;
  var SenhaAceitavel               = document.getElementById('SenhaAceitavel');
  

  obterQuantidades(senhaInserida); 
  validarCriteriosAprovados();

  validarCriterioCor(spansenhaInserida,                  TotalCriteriosAprovados,   3);  
  validarCriterioCor(spanCaracteresTotal,      quantidadeCaracteresTotal,      8);
  validarCriterioCor(spanCaracteresMinusculos, CaracteresMinusculos, 1);
  validarCriterioCor(spanCaracteresMaiusculos, CaracteresMaiusculos, 1);
  validarCriterioCor(spanCaracteresSimbolos,             CaracteresSimbolos,             1);
  validarCriterioCor(spanQuantidadeNumeros,              quantidadeNumeros,              1);
  validarCriterioCor(spanCriteriosAprovados,             TotalCriteriosAprovados,   3);
  
  spansenhaInserida.innerHTML                  = 'Senha digitada:                      ' + senhaInserida; 
  spanCaracteresTotal.innerHTML      = 'Quantidade de caracteres total:      ' + quantidadeCaracteresTotal;  
  spanCaracteresMinusculos.innerHTML = 'Quantidade de caracteres minusculos: ' + CaracteresMinusculos;
  spanCaracteresMaiusculos.innerHTML = 'Quantidade de caracteres maiusculos: ' + CaracteresMaiusculos;
  spanCaracteresSimbolos.innerHTML             = 'Quantidade de simbolos:              ' + CaracteresSimbolos;
  spanQuantidadeNumeros.innerHTML              = 'Quantidade de numeros:               ' + quantidadeNumeros;
  spanCriteriosAprovados.innerHTML             = 'Quantidade de critrrios aprovados:   ' + TotalCriteriosAprovados + ' de 4';  
  SenhaAceitavel.checked                     = (TotalCriteriosAprovados >= 3) && (quantidadeCaracteresTotal >= 8);
  
  if (quantidadeCaracteresTotal == 0)
    limpar();
}

function validarCriterioCor(span, criterio, valor) {

  span.style.color = (criterio >= valor) 
                     ? CorAceitavel 
                     : corNaoAceitavel;
}

function obterQuantidades(senhaInserida) {

  CaracteresMinusculos = 0;
  CaracteresMaiusculos = 0;  
  CaracteresSimbolos             = 0;  
  quantidadeNumeros              = 0;  

  for (var i = 0; i < senhaInserida.length; i++) {
  
    letraAtual = senhaInserida.charAt(i);
    
    if (letraAtual == ' ') {
      CaracteresSimbolos++;
    }
    else {	
      if (isLetra(letraAtual)) {

        if (isMaiusculo(letraAtual)) {
          CaracteresMaiusculos++;
        }
        else {
          CaracteresMinusculos++;
        }
      }
      else {
      
        if (isNumero(letraAtual)) {
          quantidadeNumeros++;
        }
        else {
          CaracteresSimbolos++;
        }
      }
    }  
  }
}

function validarCriteriosAprovados() {

  TotalCriteriosAprovados = 0;
  
  if (CaracteresMaiusculos > 0)
    TotalCriteriosAprovados++;
	
  if (CaracteresMinusculos > 0)
    TotalCriteriosAprovados++;
	
  if (CaracteresSimbolos > 0)
    TotalCriteriosAprovados++;
	
  if (quantidadeNumeros > 0)
    TotalCriteriosAprovados++;
}

function isMaiusculo(letra) {

  return (letra == letra.toUpperCase());
}

function isLetra(letra) {   

  var caractere = letra.charCodeAt(0);
  
  return ( ( (caractere >= 65) && (caractere <= 90))   || 
           ( (caractere >= 97) && (caractere <= 122) ) );
}

function isNumero(letra) {  
 
  return !isNaN(letra);
}

function limpar() {

  spansenhaInserida.innerHTML                  = '';
  spanCaracteresTotal.innerHTML      = '';
  spanCaracteresMinusculos.innerHTML = '';
  spanCaracteresMaiusculos.innerHTML = '';
  spanCaracteresSimbolos.innerHTML             = '';
  spanQuantidadeNumeros.innerHTML              = '';
  spanCriteriosAprovados.innerHTML             = '';
}