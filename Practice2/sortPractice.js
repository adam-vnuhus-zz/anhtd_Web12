'use strict'

function sort(input) {
  let temp = 0;
  for (let index = 0; index < input.length; index++) {
    for (let index2 = 0; index2 < input.length; index2++) {
      if (input[index] < input[index2]) {
        temp = input[index];
        input[index] = input[index2];
        input[index2] = temp;
      }
    }
  }
  return input;
}

module.exports = sort
