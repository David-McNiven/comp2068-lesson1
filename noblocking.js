var fs = require('fs');

var food = fs.readFile('food.txt','utf8', function(err, food){
  if (err) {
    console.log(err);
  } else {
  console.log(food);
  }
});
console.log('FOOD:');

var drinks = fs.readFile('drinks.txt','utf8',function(err,drinks){
  if (err) {
    console.log(err);
  } else {
  console.log('DRINKS:');
  console.log(drinks);
  }
});
