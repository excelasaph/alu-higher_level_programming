#!/usr/bin/node
const square = require('./5-square.js');
const Square = class extends square {
  charPrint (c) {
    if (c === undefined) {
      this.print();
    } else {
      for (let h = 0; h < this.height; h++) {
        let shape = '';
        for (let w = 0; w < this.width; w++) {
          shape = shape + c;
        }
        console.log(shape);
      }
    }
  }
};
module.exports = Square;
