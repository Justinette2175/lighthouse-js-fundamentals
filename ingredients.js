var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

var length = ingredients.length;
var i = 0;

for ( var index = length - 1; index >= 0; index -= 1 ){
  console.log( ingredients[index] );
}