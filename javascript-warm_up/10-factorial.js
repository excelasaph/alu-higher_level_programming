#!/usr/bin/node
const { argv } = require('process');
const argument = parseInt(argv[2]);
if (isNaN(argument)) {
  console.log(1);
} else {
  const result = factorial(argument);
  console.log(result);
}
function factorial (value) {
  if (value === 0) {
    return 1;
  } else {
    return value * factorial(value - 1);
  }
}
