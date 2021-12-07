// hoisting
// functions and var declaration are hoisted
// safer to access only after initialized

display();

// error
// console.log(firstName);
// console.log(lastName);

// undefined
console.log(randomName);

// error
// moreComplex();

const firstName = "Ivanov";
let lastName = "Anna";
var randomName = "Kate";

function display() {
  console.log("hello world");
}
moreComplex();

function moreComplex() {
  console.log(`${firstName}, ${lastName}, ${randomName}`);
}

moreComplex();
