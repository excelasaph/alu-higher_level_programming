#!/usr/bin/node
const argv = [5, 6, 8, 9, 3, 4, 7];
if (argv.length <= 2) {
  console.log('No argument');
} else if (argv.length === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
