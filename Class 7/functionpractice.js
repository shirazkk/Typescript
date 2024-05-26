//car function
// function cardetail(car,color,modelyear,){
//     let cars=[`${"supra"}  ${"Red"}  ${1993}`];
//     return cars
// }
// let result=cardetail("supra","Red",1993)
// console.log(result);
// car function using arrow function
// let car=(carname,color,modelyear,engine)=>{
//     let cardetails=[`${carname="BMW"} ${color="Black"} ${modelyear=2020} ${engine="V5"}`]
//     return cardetails
// }
// let res=car("BMW","Black",2022,"V5")
// console.log(res);
// car function using Anonymous function
// let car=function car(carname:string,color:string,modelyear:number,engine:string){
//     let cardetail=[`${carname="Porsche"}  ${color="Yellow"}  ${modelyear=2022}  ${engine="V8"}`]
//     return cardetail 
// }
// let result=car("Porsche","Yellow",2022,"V8")
// console.log(result);
function getTime() {
    return new Date().getTime();
}
var res = getTime();
console.log(res);
function add(a, b, c) {
    return a + b + (c || 0);
}
var result = add(2, 2);
console.log(result);
