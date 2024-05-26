type intersection={
     name:string,
     class:string,
     address:string
}
type intersection2={
    contactNumber:number,
    emailAddress:string
}

let intersec:intersection&intersection2={
    name:"shiraz",
    class:"E2M2",
    address:"xyz",
    contactNumber:9999,
    emailAddress:"xyz@gmail.com"
}

console.log(intersec);
