#!/usr/bin/node
const { argv } = require('process');
if (argv.length <= 3) {
  console.log(0);
} else {
  secondBiggestNumber(argv);
}
function secondBiggestNumber (processArray) {
  const secondIndex = 1;
  const numberArray = processArray.slice(2); 
  for (let i = 0; i < numberArray.length; i++) {
    numberArray[i] = parseInt(numberArray[i]);
  }
  for (let i = 0; i < numberArray.length - 1; i++) {
    for (let j = 0; j < numberArray.length - 1; j++) {
      if (numberArray[j] < numberArray[j + 1]) {
        const value = numberArray[j];
        numberArray[j] = numberArray[j + 1];
        numberArray[j + 1] = value;
      }
    }
  } 
  console.log(numberArray[secondIndex]);
}
