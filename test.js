const assert = require("assert");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b; // bugg med flit
}

assert.strictEqual(add(2, 3), 5);
assert.strictEqual(subtract(5, 3), 2);

console.log("Alla tester gick igenom!");