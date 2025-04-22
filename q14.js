// * ==================================2=====================================

/*
 todo: 1. Take the object from question 1  
 todo: 2. put all the values into an array with 2 ways that you’ve learned
*/
const obj = { number: 6043, age: 21, pt: 96 };

const number = obj.number;
const age = obj.age;
const pt = obj.pt;
console.log(number, age, pt);

//------------------------------------------

const { number, age, pt } = obj;

const value = [number, age, pt];

console.log(value); 

//-----------------------------------------------


const valuesArray1 = Object.values(obj);

console.log(valuesArray1);

