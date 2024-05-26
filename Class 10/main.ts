// let students={
//     name:"shiraz Ali",
//     DOB:"19/10/2003",
//     Father:{
//         Name:"Abubakar Khaskheli",
//         Occupation:"Government Servent",
//         salary:123,
//         DOB:"XYZ"


//     },
//     Class:"IT-504",
//     University:"Sindh Madrastul Islam ",
//     Address:{
//         street:2,
//         postalcode:7500,
//         province:"sindh",
//         City:"Karachi"
//     },
//     gender:"Male",


// }

// console.log(students);

// .....................................................................................................

// let Product={
//     product:"T-Shirt",
//     tittle:"Nike",
//     Description:'xyz',
//     additional_Info:{
//         color:{
//             color1:"Black",
//             color2:"Red",
//             color3:"Blue",
//             color4:"White"
//         },
        
//         size:"Medium,Large,Extra Large",
//         Quantity:22,
//         Price:"100$"
//     },


// }
// console.log(Product);

// ............................................................................................

type studentInfo={
    student:{
        studentname:string,
        fatherName:string,
        class:string,

    },
    university:{
        UniName:string,
        department:string,
        isRecognized:boolean

        
    },
};{
    let info:studentInfo={
        student:{
            studentname:"xyz",
            fatherName:"xyz",
            class:"xyz"
        },
        university:{
            UniName:"xyz",
            department:"xyz",
            isRecognized:true
        }
    }
    // console.log(info.student);


    console.log(Object.keys(info.student));  //return student object values names 
    // console.log(Object.values(info.university));    giving error
    // console.log(Object.entries(info.student));
}

// ...................................................................................................................


//this is normal function
// const greet=()=>{
//     console.log("heelo i am shiraz");
    
// }
// greet()

let student1={
    name:"shirazali",
    class:"xyz",
    callNAme:function(subject1:string,subject2:string,subject3:string){    //this is function inside object which is called method 
        let subjects="maths"+"English"+"chemistry"
        
        
        
    },
     callName(maths,English,chemistry)
      
};
console.log(student1.class);

