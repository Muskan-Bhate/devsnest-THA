/*Write a JavaScript program to find the most frequent item of an array
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )*/

function mostFrequentItem(arr)
{
   arr.sort();
   var maxCount = 0;
   var count = 1;
   var item;
   for(var i = 1 ; i < arr.length ; i++)
   {
       var prev = arr[i-1];
       var curr = arr[i];
       if(prev === curr)
       {
           count++;
       }
       else
       {
           count = 1;
       }
       if(count > maxCount)
       {
           item = prev;
           maxCount = count;
       }
   }
   return `${prev} ( ${maxCount} times )`;
}
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(mostFrequentItem(arr1));