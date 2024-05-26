let student={
    username:"shiraz Ali",
    Id:123,
    sLout:"Thurdsday",

}
console.log(student); 
 //backtick for dynamic value.`` only take one property

console.log([`${student.username}, ${student.sLout}, ${student.Id}`]);



let car:{
   company:string,
   car:string,
   modelyear:number|string,
   Engine:string,
   color:string,
   numberPlate:string|number,
   owner:string,

}
={
   company:"Toyota",
   car:"Supra MK4",
   modelyear:"1993",
   Engine:"V5",
   color:"Red",
   numberPlate:"Khaskheli 786",
   owner:"Shiraz Ali"
}

console.log(car);






let student2:{
    name:string,
    age:number,
    gender:string,
    id:number,
    email:string,

}={
    name:"shiraz Ali",
    age:20,
    gender:"Male",
    id:2820,
    email:"shirazkk8@gmail.com",
}
console.log(student2);




let class22: {
    University: string;
    Department: string;
    students: number;
    classCapacity: number;
    className: number;
    Teacher: string;
    batch: number
} = {
    University: "Sindh Madrastul Islam",
    Department: "Artificial Intelligence",
    className: 504,
    Teacher: "Muhammad Ali",
    students: 40,
    classCapacity: 60,
    batch: 1
};
console.log(class22);



let marrageCeromany: {
    guest: number,
    howmanydishes: number,
    dishes:string,
    MarrageHall: string,
    veneuedate: number | string,


} = {
    guest: 400,
    howmanydishes: 5,
    dishes:`"mutton Karahi" ,"chicken biryani"`,
    MarrageHall: "newplay marrage hall",
    veneuedate: "25/10/24",

}
marrageCeromany.guest=600;
console.log(marrageCeromany);



make our own type in object
type gender=string   //type inside type 
type Employee = {
    name: string,
    id: number,
    age?:number    //? optional
    gender:gender

};
let employee1: Employee = {
    name: "shiraz ALi",
    id: 233,
    age:24,
    gender:"male"
};

let employee2:Employee={
    name:"aisha",
    id:22,
    gender:"female" 
};


employee2.name="fatima";

console.log(employee1);
console.log(employee2);



type students="shiraz"|"taimoor"|"umair"|"Hamzah";
let names1:students='Hamzah'
console.log(names1);














