var nums = [45, 65, 77, 34];

nums.forEach(function(num) {
  console.log(num);
})

// myForEach(nums, function(num) {
//   console.log(num);
// })

var colors = ["red", "orange", "yellow"]

function myForEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func();
  }
}

myForEach(colors, alert);
