const counter = (arr) => {
  return `There are ${arr.length} elements in this array.`
}

let adder = (a, b) => {
  return `The sum of two numbers is ${a + b}`
}

let pi = 3.142

// SHORT WAY

module.exports = {
  counter,
  adder,
  pi
}




// LONG WAY

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;