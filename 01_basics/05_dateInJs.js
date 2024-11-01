let todaysDate = new Date()  //This is one way to define date
// console.log(todaysDate);
// console.log(todaysDate.toString());
// console.log(todaysDate.toDateString());
// console.log(todaysDate.toTimeString());
// console.log(todaysDate.toISOString());
// console.log(todaysDate.toJSON());
// console.log(todaysDate.toLocaleString());


let myCreatedDate = new Date("2024-9-15")  //This is another way of defining date object and remember the type of date is always object
console.log(myCreatedDate.toLocaleString());
console.log(typeof myCreatedDate);


let myAnotherCreatedDate = new Date(2024, 9, 15)
console.log(myAnotherCreatedDate.toLocaleString());



let myAnotherCreatedDate2 = new Date(2024, 9, 15, 1, 22)  //Inner parameters are  year, m, day, hour, minute
console.log(myAnotherCreatedDate2.toLocaleString());
