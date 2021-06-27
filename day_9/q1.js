//Create 2 object and try to use call, apply and bind on them

var fruitOne = {
    name : "Mango",
    display : function(amount,quantity){
        console.log(this.name)
        console.log("Total Price = ",amount * quantity)
    }
}
var fruitTwo = {
    name : "Apple"
}
//call
fruitOne.display.call(fruitTwo,50,6);

//apply
fruitOne.display.apply(fruitTwo,[30,5]);

//bind
const data = fruitOne.display.bind(fruitTwo,70,3);
data();