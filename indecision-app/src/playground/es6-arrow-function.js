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


const fullName = 'Igor Walace Cuevas'

const getFirtsName = (fullName) =>{
    return fullName.split(' ')[0];
}

const getFirtsNameArrow = (fullName) => fullName.split(' ')[0];

console.log(getFirtsName(fullName));
console.log(getFirtsNameArrow(fullName));