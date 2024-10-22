let score = 33

console.log(typeof score);  //number
console.log(typeof (score)); //number

let valueInString = String(score)
console.log(typeof valueInString); //string

let valueInNumberAgain = Number(valueInString)
console.log(typeof valueInNumberAgain); //number


let score2 ="33abc"
console.log(score2); //33abc
console.log(typeof score2); //string

let score2InNumber = Number(score2)
console.log(typeof score2InNumber); //number
console.log(score2InNumber); //NaN
 
/*Explanation

String could be converted into numbers and its typeof will also be number but the chances could be that the value of number 
could be NaN for example- see code from line 13

*/

let score3 = null
console.log(score3); //null
console.log(typeof score3); //object, because type of null is always object

let score3InNumber = Number (score3)
console.log(score3InNumber); //0, if null is converted in numbers then its value will be 0
console.log(typeof score3InNumber); //number

let score3InString = String (score3)
console.log(score3InString); //null
console.log(typeof score3InString); //string



let score4;
console.log(score4); //undefined
console.log(typeof score4); //undefined

let score4InNumber = Number (score4)
console.log(score4InNumber); //NaN - If undefined is changed into number then its value will be NaN and it is same as when string is changed into number
console.log(typeof score4InNumber); //number

let score4InString = String (score4)
console.log(score4InString); //undefined
console.log(typeof score4InString); //String

let score5 = true 
console.log(score5); //true
console.log(typeof score5); //boolean

let score5InNUmber = Number (score5)
console.log(score5InNUmber); //1
console.log(typeof score5InNUmber); //number

let score5InString = String (score5)
console.log(score5InString); //true
console.log(typeof score5InString); //string




//BOOLEAN CONVERSION

let num1 = 1
let num1InBoolean = Boolean (num1)
console.log(num1InBoolean);
console.log(typeof num1InBoolean);

let num2 = 0
let num2InBoolean = Boolean (num2)
console.log(num2InBoolean);
console.log(typeof num2InBoolean);

let num3 = 3
let num3InBoolean = Boolean (num3)
console.log(num3InBoolean);
console.log(typeof num3InBoolean);

let num4 = "1"
let num4InBoolean = Boolean (num4)
console.log(num4InBoolean);
console.log(typeof num4InBoolean);

let num5 = "0"
let num5InBoolean = Boolean (num5)
console.log(num5InBoolean);
console.log(typeof num5InBoolean);

let string = "Arpit"
let stringInBoolean = Boolean (string)
console.log(stringInBoolean);
console.log(typeof stringInBoolean);

let emptyString = "";
console.log(typeof emptyString);

let emptyStringInBoolean =  Boolean (emptyString)
console.log(emptyStringInBoolean);
console.log(typeof emptyStringInBoolean);


/*
Explanation for boolean conversion

If and only if 0 and empty string is converted into boolean then its value will be false otherwise any thing that is converted 
into boolean will be true whether it is "0..infintiy" or 1..infinity or any string character
*/






















