//pop,push,shift,unshift,splice   parh
//splice method.center se koi chiz delete krni ho too use krte ha.
var names = ["shiraz", "sarang", "sarmad"];
names.splice(1, 1, "ahmed"); //first parameter kaha se delete krna or kitne delete krne ha.and third parameter add new array item.
console.log(names);
var car = ["revo", "supra", "BMW"];
car.splice(1, 0, "MarkX");
console.log(car);
//homework  diffrence between splice and slice.
var name2 = ['shiraz', "ali", "ahmed"];
name2.splice(0, 1); //"shiraz" delete hojyega 
console.log(name2, "1");
name2.splice(2, 1); //ab yaha par kuch bi delete nhi hoga kyoke jab humne "shiraz" delte kiya too "ali" index 0 hogya or ahmed index 1 so index 2 exsis nhi krta thats why kuch delte nhi hoa 
console.log(name2, "2");
