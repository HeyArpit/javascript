

let marvel_Heroes = ["captainAmerica", "Thor", "Hulk", "IronMan"]
let dc_Heroes = ["BlackAdam", "Flash", "Aquaman", "Superman"]

// marvel_Heroes.push(dc_Heroes)

// console.log(marvel_Heroes);



// console.log(marvel_Heroes);
// console.log(dc_Heroes);





let indian_Heroes = ["Nagraj", "donga", "Dhruv", "Bhediya", "Anthony"]

let All_Heroes= marvel_Heroes.concat(dc_Heroes).concat(indian_Heroes)

console.log(All_Heroes);


let All_Heroes_print = [...dc_Heroes, ...indian_Heroes, ...marvel_Heroes]
console.log(All_Heroes_print);
