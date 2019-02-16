//Variables globales
var operandoa;
var operandob;
var operacion;
var numero;

//Funciones
function resetear(){
  display.textContent = "0";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}

function limpiar(){
  display.textContent = "";
}

function resolver(){
  var resultado = 0;
    switch(operacion){
      case "+":
        resultado = parseFloat(operandoa) + parseFloat(operandob);
        display.textContent = resultado;
        break;

      case "-":
        resultado = parseFloat(operandoa) - parseFloat(operandob);
        display.textContent = resultado;
        break;

      case "*":
        resultado = parseFloat(operandoa) * parseFloat(operandob);
        display.textContent = resultado;
        break;

      case "/":
        resultado = parseFloat(operandoa) / parseFloat(operandob);
        display.textContent = resultado;
        break;
    }
}

function cambiarSigno(){
  numero = 0;
  numero = display.textContent;
}

function aumentarTamanioTecla(){
  uno.style.width = "100px";
}

var Calculadora = {
  init: function(){
    //Variables
    var display = document.getElementById('display');
    var on = document.getElementById('on');
    var division = document.getElementById('dividido');
    var multiplicacion = document.getElementById('por');
    var resta = document.getElementById('menos');
    var suma = document.getElementById('mas');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('1');
    var dos = document.getElementById('2');
    var tres = document.getElementById('3');
    var cuatro = document.getElementById('4');
    var cinco = document.getElementById('5');
    var seis = document.getElementById('6');
    var siete = document.getElementById('7');
    var ocho = document.getElementById('8');
    var nueve = document.getElementById('9');
    var cero = document.getElementById('0');
    var signo = document.getElementById('sign');
    var punto = document.getElementById('punto');

    //Eventos del mouse
    uno.onclick = function(e){
      if(display.textContent.length == 1 && display.textContent == 0){
          display.textContent = "1";
      }

      else if(display.textContent.indexOf(".") != -1){
        if(display.textContent.length < 8){
          display.textContent = display.textContent + "1";
        }
      }

      else if(display.textContent.length < 8){
        display.textContent = display.textContent + "1";
      }

      cambiarSigno();

      uno.style.width = "70px";
    }

    uno.onblur = function(e){
      aumentarTamanioTecla();
    }

    dos.onclick = function(e){
      if(display.textContent.length == 1 && display.textContent == 0){
          display.textContent = "2";
      }

      else if(display.textContent.indexOf(".") != -1){
        if(display.textContent.length < 8){
          display.textContent = display.textContent + "2";
        }
      }

      else if(display.textContent.length < 8){
        display.textContent = display.textContent + "2";
      }

      cambiarSigno();
    }

    tres.onclick = function(e){
      if(display.textContent.length == 1 && display.textContent == 0){
          display.textContent = "3";
      }

      else if(display.textContent.indexOf(".") != -1){
        if(display.textContent.length < 8){
          display.textContent = display.textContent + "3";
        }
      }

      else if(display.textContent.length < 8){
        display.textContent = display.textContent + "3";
      }

      cambiarSigno();
    }

    cuatro.onclick = function(e){
      if(display.textContent.length == 1 && display.textContent == 0){
          display.textContent = "4";
      }

      else if(display.textContent.indexOf(".") != -1){
        if(display.textContent.length < 8){
          display.textContent = display.textContent + "4";
        }
      }

      else if(display.textContent.length < 8){
        display.textContent = display.textContent + "4";
      }

      cambiarSigno();
    }

    cinco.onclick = function(e){
      if(display.textContent.length == 1 && display.textContent == 0){
          display.textContent = "5";
      }

      else if(display.textContent.indexOf(".") != -1){
        if(display.textContent.length < 8){
          display.textContent = display.textContent + "5";
        }
      }

      else if(display.textContent.length < 8){
        display.textContent = display.textContent + "5";
      }

      cambiarSigno();
    }

    seis.onclick = function(e){
      if(display.textContent.length == 1 && display.textContent == 0){
          display.textContent = "6";
      }

      else if(display.textContent.indexOf(".") != -1){
        if(display.textContent.length < 8){
          display.textContent = display.textContent + "6";
        }
      }

      else if(display.textContent.length < 8){
        display.textContent = display.textContent + "6";
      }

      cambiarSigno();
    }

    siete.onclick = function(e){
      if(display.textContent.length == 1 && display.textContent == 0){
          display.textContent = "7";
      }

      else if(display.textContent.indexOf(".") != -1){
        if(display.textContent.length < 8){
          display.textContent = display.textContent + "7";
        }
      }

      else if(display.textContent.length < 8){
        display.textContent = display.textContent + "7";
      }

      cambiarSigno();
    }

    ocho.onclick = function(e){
      if(display.textContent.length == 1 && display.textContent == 0){
          display.textContent = "8";
      }

      else if(display.textContent.indexOf(".") != -1){
        if(display.textContent.length < 8){
          display.textContent = display.textContent + "8";
        }
      }

      else if(display.textContent.length < 8){
        display.textContent = display.textContent + "8";
      }

      cambiarSigno();
    }

    nueve.onclick = function(e){
      if(display.textContent.length == 1 && display.textContent == 0){
          display.textContent = "9";
      }

      else if(display.textContent.indexOf(".") != -1){
        if(display.textContent.length < 8){
          display.textContent = display.textContent + "9";
        }
      }

      else if(display.textContent.length < 8){
        display.textContent = display.textContent + "9";
      }

      cambiarSigno();
    }

    cero.onclick = function(e){
      if(display.textContent.length == 1 && display.textContent == 0){
          display.textContent = "0";
      }

      else if(display.textContent.indexOf(".") != -1){
        if(display.textContent.length < 8){
          display.textContent = display.textContent + "0";
        }
      }

      else if(display.textContent.length < 8){
        display.textContent = display.textContent + "0";
      }
    }

    division.onclick = function(e){
      operandoa = display.textContent;
      operacion = "/";
      limpiar();
    }

    multiplicacion.onclick = function(e){
      operandoa = display.textContent;
      operacion = "*";
      limpiar();
    }

    resta.onclick = function(e){
      operandoa = display.textContent;
      operacion = "-";
      limpiar();
    }

    suma.onclick = function(e){
      operandoa = display.textContent;
      operacion = "+";
      limpiar();
    }

    igual.onclick = function(e){
      operandob = display.textContent;
      resolver();
    }

    on.onclick = function(e){
      resetear();
    }

    punto.onclick = function(e){
      if(display.textContent.indexOf(".") != -1){
        display.textContent;
      }

      else{
        display.textContent = display.textContent + ".";
      }
    }

    signo.onclick = function(e){
      if(display.textContent.length == 1 && display.textContent == 0){
        display.textContent = "0";
      }

      else if(display.textContent.indexOf("-") != -1){
        if(display.textContent.length < 8){
          display.textContent = numero;
        }
      }

      else if(display.textContent.length < 8){
        display.textContent = "-" + display.textContent;
      }
    }
  }
}

Calculadora.init();
