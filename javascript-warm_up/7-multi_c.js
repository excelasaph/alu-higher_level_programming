#!/usr/bin/node
const { argv } = require('process');
const xTimes = parseInt(argv[2]);
if (isNaN(xTimes)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < xTimes; i++) {
    console.log('C is fun');
  }
}
