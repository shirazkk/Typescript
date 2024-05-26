// let students={
//     name:"shiraz Ali",
//     DOB:"19/10/2003",
//     Father:{
//         Name:"Abubakar Khaskheli",
//         Occupation:"Government Servent",
//         salary:123,
//         DOB:"XYZ"
{
    var info = {
        student: {
            studentname: "xyz",
            fatherName: "xyz",
            class: "xyz"
        },
        university: {
            UniName: "xyz",
            department: "xyz",
            isRecognized: true
        }
    };
    // console.log(info.student);
    console.log(Object.keys(info.student)); //return student object values names 
    // console.log(Object.values(info.university));    giving error
    // console.log(Object.entries(info.student));
}
// ...................................................................................................................
//this is normal function
// const greet=()=>{
//     console.log("heelo i am shiraz");
// }
// greet()
var student1 = {
    name: "shirazali",
    class: "xyz",
    callNAme: function () {
        console.log("heelo");
    },
};
console.log(student1.class);
student1.callNAme();
