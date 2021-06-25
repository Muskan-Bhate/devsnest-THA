/*Write a JavaScript function to check whether an `input` is an array or not
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
True*/

function is_Array(input){
    var checkArr = Array.isArray(input);
    return checkArr;
}
var input1 = is_Array('w3resource');
var input2 = is_Array([1, 2, 4, 0]);
console.log(input1);
console.log(input2);