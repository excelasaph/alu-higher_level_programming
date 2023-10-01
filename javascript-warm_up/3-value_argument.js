#!/usr/bin/node
const { argv } = require('process');
let i = 0;
let elementCount = 0;
while (argv[i]) {
  elementCount++;
  i++;
}
if (elementCount <= 2) {
  console.log('No argument');
} else {
  console.log(argv[2]);
}
