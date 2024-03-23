// // //if and else statement
// // // () condition mangta ha yeh bracket. or decsion lete ha isme
// // // {} we consider it gate
// // //if statement syntax if(){}
// // //() we also call it pyranthesis
// // let myAge = 18;
// // if (myAge >= 18) {
// //   console.log("you are elgible");
// // }
// // //else me round bracket () nhi lagate.
// // else {
// //   console.log("you are not elgible");
// // }
// // let month = "Ramadan";
// // if (month == "jan") {
// //   console.log("water bottle allowed");
// // }

// // //else ke andr if ko bolte ha nested
// // else {
// //   if (month == "Ramadan") {
// //     console.log("Not Allowed");
// //   }
// //   console.log("water bottle is allowed");
// // }
// // let monthS = "jan";
// // if (monthS == "feb") {
// //   console.log("we go for picnic In this month");
// // } else if (monthS == "Oct") {
// //   console.log("we not going for picnic in this month");
// // } else if (monthS == "jan") {
// //   console.log("we are busy in this month");
// // } else {
// //   console.log("we go for picnic next month");
// // }

// //it is called shortcircuit
// //these are logical operator || OR operator,&& AND operator.
// //&& check both then give answer
// //|| check one then give answer
// // let monthsd = "not" || "ramadan";
// // console.log(monthsd);

// // let monthdsa = "yes" && "no";
// // console.log(monthdsa);

// // let amonth = false && "yes allowed";
// // console.log(amonth);
// // let amontsh = false || "yes allowed";
// // console.log(amontsh);

// // let nmonth = true || "not allowed";
// // console.log(nmonth);

// let tool = false;
// let moznth = tool && "uPS"; //This is because in an AND operation, if one operand is false, the result is always false
// console.log(moznth);

// let tools = true;
// let yesk = tools && "UPS";
// console.log(yesk);

// let tool1 = false;
// let moznth1 = tool1||"uPS";
// console.log(moznth1);

// let tools3= true;
// let yesk4= tools3 || "UPS";
// console.log(yesk4);

let null1 = "Hot water";
let null2 = "cold water";
let null3 = "No water";
let start = null1 || (null2 && null3);
console.log(start);

let null4 = "hot water";
let null5 = false
let null6 = true
let answer = null4 || (null5 && null6); 
console.log(answer);
