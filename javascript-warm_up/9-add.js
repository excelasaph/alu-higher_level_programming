#!/usr/bin/node
const { argv } = require('process');
const firstNumber = parseInt(argv[2]);
const secondNumber = parseInt(argv[3]);
if (isNaN(firstNumber)) {
  console.log(firstNumber);
} else if (isNaN(secondNumber)) {
  console.log(secondNumber);
} else {
  add(firstNumber, secondNumber);
}
function add (a, b) {
  console.log(a + b);
}
