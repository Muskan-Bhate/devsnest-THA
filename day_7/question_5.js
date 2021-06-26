/*Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder.*/ 
var cylinder = {
    volume : function(radius,height) {
         var v = 3.14 * Math.pow(radius,2) * height;
         return v.toFixed(4);
    }
}
console.log(cylinder.volume(5,12));