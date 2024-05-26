//simple function
// function biryani(meat,rice,masalas){
//     let recepie=meat+rice+masalas+3;
//     return recepie
// }
// let finalrecepie=biryani(2,3,4)
// console.log(finalrecepie);
//arrow function
// let halffryegg=()=>1+2+3
// let recepie1=halffryegg()
// console.log(recepie1);
// //anonymous function
// let nihari=function(){
//     let ingrediants=1+2+3;
//     return ingrediants
// }
// let ingrediantofnehari=nihari()
// console.log(ingrediantofnehari);
// global scope
var globalscope = 20;
function globalscope1() {
    var globalscope = 29;
    console.log(globalscope);
}
globalscope = 20;
globalscope1();
