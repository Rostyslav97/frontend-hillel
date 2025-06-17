const ex1 = 2 > 10;
console.log(ex1, typeof ex1);


const ex2 = 2 < 10;
console.log(ex2, typeof ex2);


const ex3 = 10 >= 10;
console.log(ex3, typeof ex3);


const ex4 = 8 <= 10;
console.log(ex4, typeof ex4);

const ex5 = 10 == '10'; // bad
console.log(ex5, typeof ex5);


const ex6 = 5 != 10; // bad
console.log(ex6, typeof ex6);

const ex12 = 10 === '10'; // good
console.log(ex12, typeof ex5);

const ex13 = 5 !== 10; // good
console.log(ex13, typeof ex6);

const ex7 = '0' === false;
console.log(ex7)


const ex8 = '0' !== false;
console.log(ex8);


const ex9 = 'abc' === 'acd';
console.log(ex9);


const ex10 = 'abcd' > 'abca';
console.log(ex10);

const ex11 = 'a' > 'A';
console.log(ex11);
