//Four ways are there to create an object but we will study two or three

//First is object literals



let user1 = {
    fname : "Arpit",
    lname : "Yadav",
    "Full Name" : "Arpit Yadav",
    age : 22,
    email : "yadavarpit@google.com",
    IsLoggedIn : "false"
}


// console.log(user1.fname);
// console.log(user1["lname"])
// console.log(user1.IsLoggedIn)
// console.log(user1["Full Name"])



user1.FathersName = "Shailendra"
user1.greeting = function(){
    return "Welcome User1"
}

user1.greeting2 = function(){
    return `Hi ${this["Full Name"]} this is a welcome message from your father ${this.FathersName}`
}

console.log(user1.greeting());
console.log(user1.greeting2())


