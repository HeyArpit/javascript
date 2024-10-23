let score;
score = 83

console.log(score);


let score2 =  undefined;
score2 = 58

console.log(score2);


// const score3 = undefined
// score3 = 85

// console.log(score3);

// const score4;
// score4 = 78

// console.log(score4);





//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack memory(Primitive)                                                 heap memory(non-primitive)
//string, number, symbol, bigint, null, undefined, boolean                Arrays, object, function

let myYoutubeChannel = "arpit@myYoutubeChannel.com"

let anotherChannel = myYoutubeChannel

console.log(anotherChannel);     //arpit@myyoutubechannel.com
console.log(myYoutubeChannel);   //arpit@myyoutubechannel.com

anotherChannel = "arpit@anotherchannel.com"

console.log(anotherChannel); // arpit@anotherchannel.com     //change has been reflected to the copy of the channel
console.log(myYoutubeChannel); //arpit@myyoutubechannel.com     //but no change has been reflected to the original value




let userOne = {
    name:"arpit",
    age: 22,
    email: "yadavarpit@gmail.com"
}

console.log(userOne.email);   //yadavarpit@gmail.com

let userTwo = userOne

userTwo.email = "yadavarpit@google.com"

console.log(userTwo.email);    //yadavarpit@google.com   //here I made a change in the other value that took refrence from the original one
console.log(userOne.email)     //yadavarpit@google.com   //so original value has also got reflected by the change


/*
The above both examples shows the difference between primitve and non primitive data type
In case of primitive datatype the change will only reflect to the copy of the variable but not the original one whereas
In case of non primitive datatype the chnage will reflect to the original value of the variable
*/


