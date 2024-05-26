//we call this multi dimensional array.
var fruits = ["Peach", "Cheeku", ["Mango", "apple", "Banana"]]; //we declare array in array which called nested array
console.log(fruits[0]); //here we access 0 index element which is "peach"
console.log(fruits[2]); //here we access index 2 which is ["Mango","apple","Banana"].
fruits.splice(0, 2); //now here we delete element from 0 index and delete 2 elements.
console.log(fruits); //here "peach","cheeku" will be delete.
var elements = [1, 2, 3, 4, 5, 6, ["a", "b"]];
console.log(elements[6][1]);
