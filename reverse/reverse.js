/*
    https://leetcode.com/problems/palindrome-number/

    1.entender el problema (analizar los datos de entradas y salidas proporcionados)
    2.descomponer el problema en subproblemas
    3.hacer una descripcion de como abordar los subproblemas
    4.escribir el codigo que aborda cada subproblema
    5.depurar el codigo
 
 

    3.1 hacer una copia del entero dado y convertirlo en un arreglo
    3.2 invertir el arreglo
    3.3 almacenar en una variable el resultado del arreglo invertido
    3.3 hacer la comparacion
    
    */

var x = 121;
isPalindrome(x);

function isPalindrome(x) {
  var nString = x.toString();
  var n = [...nString].reverse().join('');
  return console.log((nString === n) ? true : false)
}
