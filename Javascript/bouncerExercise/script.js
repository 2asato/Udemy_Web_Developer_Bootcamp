var age = prompt("How old are you?");

if (age < 0) {
  console.log("ERROR!!!");
}

if (age === 21) {
  console.log("happy 21st birthday!!");
}

if (age % 2 !== 0) {
  console.log("your age is odd!");
}

if (Number.isInteger(Math.sqrt(age))) {
  console.log("perfect square");
}
