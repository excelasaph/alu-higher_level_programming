#!/usr/bin/node
class Calls {
  constructor () {
    Calls.number++;
  }

  call () {
    return Calls.number;
  }
}
Calls.number = -1;
exports.logMe = function (item) {
  const count = new Calls().call();
  console.log(`${count}: ${item}`);
};
