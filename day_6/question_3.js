/*Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.*/

function first(arr,n)
{
   if(n === undefined)
   {
       return arr[0];
   }
   else if(n < 0)
   {
       return [];
   }
   else 
   {
       return arr.slice(0,n);
   }
}

//Test Cases

var input1 = first([7, 9, 0, -2]);
console.log(input1);

var input2 = first([],3);
console.log(input2);

var input3 = first([7, 9, 0, -2],3);
console.log(input3);

var input4 = first([7, 9, 0, -2],6);
console.log(input4);

var input5 = first([7, 9, 0, -2],-3);
console.log(input5);


