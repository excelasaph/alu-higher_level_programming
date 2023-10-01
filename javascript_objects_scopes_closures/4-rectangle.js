#!/usr/bin/node
const Rectangle = class {
  constructor (w, h) {
    if (w <= 0 || w === undefined || h <= 0 || h === undefined) {
      // This Block does nothing
    } else {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let h = 0; h < this.height; h++) {
      let shape = '';
      for (let w = 0; w < this.width; w++) {
        shape = shape + 'X';
      }
      console.log(shape);
    }
  }

  rotate () {
    const tempWidth = this.width;
    this.width = this.height;
    this.height = tempWidth;
  }

  double () {
    this.width = this.width * 2;
    this.height = this.height * 2;
  }
};
module.exports = Rectangle;
