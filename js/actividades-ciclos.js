//arrays
var diasDeLaSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

var numerosPares= [2,4,6,9,10,12];
function arreDos(arreglo) {
  arreglo[3]=8;
}

var deportes=['Hockey', 'Rugby', 'Atletismo'];
function arreTres(arreglo) {
  arreglo.push('Jujitsu');
}

function arreCuatro(arreglo) {
  var deporte = arreglo.pop();
  console.log(deporte);
}

function arreCinco(a) {
  var arreglo = [];
  var comida = '';
  for (var i = 0; i < a; i++) {
    arreglo[i] = prompt('Ingrese su comida favorita #'+ i);
    /*arreglo.push(comida);*/
  }
  console.log('El largo del arreglo es de '+ arreglo.length);
}

var errores = ['Error de definicion', 'Error funcion inexistente', 'Error de sintaxis', 'Error indefinido'];
function arreSeis(arreglo) {
  alert(arreglo.indexOf('Error de sintaxis'));
}

function arreSiete(arreglo) {
  for (var i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i])
  }
}

var enteros = [2, 5, 7];
function arreOcho(arreglo) {
  var suma = 0;
  for (var i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }
  console.log(suma);
}

function arreNueve(arreglo) {
  for (var i = arreglo.length; i = 0; i--) {
    console.log(arreglo[i]);
  }
}

// ciclos
function uno() {
  var contador=0;
  while (contador<=5){
    console.log(contador);
    contador++;
  }
}

function dos() {
  var contador=0;
  while (contador<=15){
    if (contador>4){
      console.log(contador);
    }
    contador++;
  }
}

function tres() {
  var contador = 100;
  while (contador>=0) {
    console.log(contador);
    contador--;
  }
}

function cuatroDOS() {
  for (var contador = 5; contador <= 15; contador++) {
    console.log(contador);
  }
}

function cuatroTRES() {
  for (var contador = 100; contador >= 0; contador--) {
    console.log(contador);
  }
}

function cinco() {
  for (var contador = 0; contador <= 14; contador = contador + 2) {
    console.log(contador);
    console.log(contador+1);
  }
  console.log(16); /*jijiji*/
}

function seis() {
  var contador = 0;
  while (contador<100) {
    console.log('Contando...');
    contador++;
  }
}

function siete() {
  for (var contador = 0; contador < 30; contador++) {
    if (contador % 2 != 0) {
        console.log(contador);
    }
  }
}

function ocho() {
  for (var contador = 99; contador >=0; contador--) {
    if (contador % 3 == 0) {
        console.log(contador);
    }
  }
}

function nueve(nro1, nro2) {
  if (nro1 > nro2) {
    for (var contador = nro2; contador <= nro1; contador++) {
      console.log(contador);
    }
  } else {
    for (var contador = nro1; contador <= nro2; contador++) {
      console.log(contador);
    }
  }
}

function diez() {
  var contador = 0;
  var numeroMuyGrande = false;
  while (!numeroMuyGrande) {
    if (contador > 99) {
      numeroMuyGrande = true;
    }
    console.log(contador);
    contador++;
  }
}

function once(nro1) {
  for (var i = nro1; i < 21; i++) {
    console.log(i);
  }
}

function potencias(nro) {
  var resultado = nro;
  while (resultado<=1000) {
    console.log(resultado)
    resultado = resultado * nro;
  }
}
