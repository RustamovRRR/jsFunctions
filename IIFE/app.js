// IIFE - Imeddiately Invoked Function Expression
// older approach - new modules
// simple approach to avoid global scope pollution
// good way at protecting the score of your function and the variables within it.

// global namespace, extra steps

const num1 = 20;
const num2 = 30;

function add() {
  console.log(`Result: ${num1 + num2}`);
}

add();

// IIFE
(function () {
  const num3 = 20;
  const num4 = 30;
  console.log(`Result with IIFE: ${num3 + num4}`);
})();

// pass arguments to IIFE
(function (num1, num2) {
  console.log(`Result with IIFE and argments: ${num1 + num2}`);
})(15, 20);

// assign function to a veriable
const result = (function (num1, num2) {
  return `Assign IIFE: ${num1 + num2}`;
})(15, 20);

console.log(result);
