'use strict';

// const square = function(x){
//     return x * x;
// }

// // const squareArrow = (x)=>{
// //     return x * x;
// // }

// const squareArrow = (x) =>  x * x;

// console.log(square(8));
// console.log(squareArrow(7));


//Challenge - Use arrow functions
//getFirtsName('Mike Smith')
//Create regular arrow function
//Create arrow function using shothand syntax


var fullName = 'Igor Walace Cuevas';

var getFirtsName = function getFirtsName(fullName) {
    return fullName.split(' ')[0];
};

var getFirtsNameArrow = function getFirtsNameArrow(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirtsName(fullName));
console.log(getFirtsNameArrow(fullName));
