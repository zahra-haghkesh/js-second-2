// ? 2. Rewrite the code below to use array destructuring instead of assigning each value to a variable.

let item = ['Egg', 0.25, 12];
// let name = item[0];
// let price = item[1];
// let quantity = item[2];
// console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);

// ! Answer :
let [name,price,quantity] =item ;
console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);
