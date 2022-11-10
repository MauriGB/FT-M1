"use strict";

function BinarioADecimal(num) {
  // num => 10110
  // hacer los pasos que tenga que hacer
  // return numDecimal
  var numDecimal = 0, i = 0, resto;
    
    while (num != 0) {
      resto = num % 10;
      num = Number.parseInt(num / 10);
      numDecimal = numDecimal + resto * Math.pow(2, i);
      ++i;
    }
    return numDecimal
}

function DecimalABinario(num) {
  // num => 22
  // hacer los pasos que tenga que hacer...
  // return numBinario
  //let numBinario = undefined
 // return (numBinario = num.toString(2))
 var binario =[]
  while (num > 0) { 
    var mod= num % 2;
    num = Math.floor(num / 2);
    binario.unshift(mod);
  } 
  binario = binario.join("");
 return binario;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};