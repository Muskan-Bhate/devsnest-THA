/*Write a JavaScript function to clone an array
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]*/

function array_Clone(arr) 
{
   var cloneArr = [];
   for(var i = 0 ; i < arr.length ; i++)
   {
       cloneArr[i] = arr[i];
   }
   return cloneArr;
}
var testDataOne = array_Clone( [1, 2, 4, 0] );
var testDataTwo = array_Clone( [1, 2, [4, 0]] );
console.log(testDataOne);
console.log(testDataTwo);