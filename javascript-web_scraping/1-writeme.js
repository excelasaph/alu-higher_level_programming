#!/usr/bin/node
const { argv } = require('process');
const fs = require('fs');

/*
 Here I am doing this also Asynchronously but
 I would make use of 3 Async functions which
 are OPEN, WRITE(FD, STRING[, POSITION[, ENCODING]], CALLBACK)
 AND FINALLY THE CLOSE.
*/

function closeFd (fd) {
  fs.close(fd, (err) => {
    if (err) console.log(err);
  });
}

if (argv[2]) {
  fs.open(argv[2], 'w', (err, fd) => {
    if (err) {
      console.log(err);
      return;
    }
    fs.write(fd, argv[3], (err, written, string) => {
      if (err) {
        console.log(err);
      }
      closeFd(fd);
    });
  });
} else {
  console.log('An error occurred no file(path) was given');
}
