// Exercise #2: No Product Image

let productName = "Apple Watch";
let productPrice = 20000;
let productDiscount = 0.3;

// Start coding here
let productNewPrice = (1-productDiscount) * productPrice ;
let productImage = `${productName} is now on discount from THB ${productPrice} to THB ${productNewPrice}. Get it now!`;

console.log(productImage);