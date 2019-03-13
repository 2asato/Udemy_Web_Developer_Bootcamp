// printReverse()
// write a function that takes an array as an argument and prints out the elements of the array in reverse order

function printReverse(arr) {
  var lastIndex = arr.length - 1;
  for (let i = lastIndex; i >= 0; i--) {
    console.log(arr[i]);
  }
}

// isUniform()
// write a function that takes an array as an argument and returns true if all elements in the array are identical

function isUniform(arr) {
  var firstElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== firstElement) {
      return false;
    }
  }
  return true;
}


// sumArray()
// write a function that accepts an array of numbers and returns the sum of all numbers in array
function sumArray(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// forEach
function sumArray(arr) {
  var total = 0;
  arr.forEach(function(element) {
    total += element;
  });
  return total;
}

// max()
// write a function that accepts an array of numbers and returns the maximum number in the array
function max(arr) {
  var max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
