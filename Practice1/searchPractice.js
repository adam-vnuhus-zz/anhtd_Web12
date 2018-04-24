'use strict'

function search(input, target) {
  for (let index = 0; index < input.length; index++) {
    if (input[index] == target) {
      return index;
    }
  }
  return -1;
}

module.exports = search
