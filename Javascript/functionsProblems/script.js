// write a function which takes a single numeric argument and returns true if the number is even and false otherwise
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

// short and sweet
function isEven(num) {
  return num % 2 === 0;
}


// write a function which takes a single numeric argument and returns the factorial of that number
function factorial(num) {
  for (let i = num-1; i >= 1; i--) {
    num *= i;
  }
  return num;
}


// write a function which takes a single kebab-cased string and returns the snake_cased version
function kebabToSnake(str) {
  let newStr = str.replace("-", "_")
  return newStr;
}
