let userName = 'John'; // User's name
let age = 28; // User's age
let isVerified = true; // Is the user verified?
const registrationDate = '2000-01-01'; // Date of registration
let userCardNumber = 1111222233334444n; // User's card number
let promoCode = 'TEST2025'; // Promo code (if available)
let alternateName; // Alternate name (undefined)
let bonusPoints = 250; // Number of bonus points

console.log(`User ${userName}, age ${age}, has ${bonusPoints} bonus points.`);
console.log(`Verification: ${isVerified ? 'yes' : 'no'}. Promo code: ${promoCode}.`);
console.log(`Registration date: ${registrationDate}.`);

console.log(`Type of userName: ${typeof userName}`);
console.log(`Type of age: ${typeof age}`);
console.log(`Type of isVerified: ${typeof isVerified}`);
console.log(`Type of registrationDate: ${typeof registrationDate}`);
console.log(`Type of userCardNumber: ${typeof userCardNumber}`);
console.log(`Type of promoCode: ${typeof promoCode}`);
console.log(`Type of alternateName: ${typeof alternateName}`);
console.log(`Type of bonusPoints: ${typeof bonusPoints}`);
