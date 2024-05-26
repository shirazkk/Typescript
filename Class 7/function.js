function tea(sugar, milk) {
    var cooked = sugar + milk + 2;
    console.log(cooked); //this console print answer will be 6
}
var responce = tea(2, 2);
console.log(responce); //undefined 
function numbers(a, b) {
    var numbers = a + b + 1 + 2;
    console.log(numbers); //it will print 5
    return numbers;
}
var res = numbers(1, 1);
console.log(res); // this will also print 5 because we use return inside function
function biryani(meat, rice, oil) {
    var cooked = meat + rice + oil + 3;
    return cooked;
}
var ans = biryani(2, 3, 4);
console.log(ans);
