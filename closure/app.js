// Closure
// Closure gives you an access to an outer function's scope from an inner function
// make private variables with closures

function outer() {
  let privateSecret = "secret";
  function inner() {
    console.log(`secret is ${privateSecret}`);
  }
  return inner;
}

console.log("------------with outer()()---------------");
outer()();

console.log("------------with assigning-----------");

const value = outer();
console.log(value);
value();

console.log("--------------- Basic Example -----------------");

function newAccount(name, initialBalance) {
  const balance = initialBalance;
  function showBalance() {
    console.log(`Hi ${name}, your balance is ${balance}`);
  }
  return showBalance;
}

newAccount("susan", 200)();

const anna = newAccount("anna", 100);
const katya = newAccount("katya", 400);
anna();
katya();

console.log("--------------- Complete Example -----------------");

function newAccountComplete(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hi ${name}, your balance is ${balance}`);
  }
  function deposit(amount) {
    balance += amount;
    showBalance();
  }
  function withdraw(amount) {
    if (amount > balance) {
      console.log(
        `Sorry, ${name}. We can't do that. You don't have enough money`
      );
      return;
    }

    balance -= amount;
    showBalance();
  }

  return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
}

const maya = newAccountComplete("maya", 100);
const kim = newAccountComplete("kim", 400);
maya.showBalance();
maya.deposit(300);
maya.withdraw(500);
maya.withdraw(50);

kim.showBalance();
kim.deposit(350);
kim.withdraw(2000);
kim.withdraw(10);
