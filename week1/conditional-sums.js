let conditionalSum = function(values, condition) {
  //values.forEach(function(array, callback))


// ATTEMPT 2:
 var result = 0;
  for (var i = 0; i < values.length; i++) {
    if (condition === "even" && values[i] % 2 === 0) {
      result += values[i];
      }
    else if (condition === "odd" && values[i] %2 !== 0) {
          result += values[i];
    } else {
      result += 0;
      }
  }
  console.log(result);
};





//ATTEMPT 1:
//   var result = 0;
//   if (condition === "even") {
//     for (var i = 0; i < values.length; i++) {
//       if (values[i] % 2 === 0){
//         result += values[i];
//       } else {
//         result += 0;
//       }
//     }
//   } else if (condition === "odd") {
//       for (var i = 0; i < values.length; i++) {
//         if (values[i] % 2 !== 0){
//           result += values[i];
//         } else {
//           result += 0;
//       }
//     }
//   }
//   console.log(result);
// };

conditionalSum([1, 2, 3, 4, 5], "even");
conditionalSum([1, 2, 3, 4, 5], "odd");
conditionalSum([13, 88, 12, 44, 99], "even");
conditionalSum([], "odd");



/* Expected Output:
6
9
144
0
*/