#!/usr/bin/node
exports.converter = function (base) {
  return (integer) => {
    return (integer.toString(base));
  };
};
