'use strict';

// Temporal dead zone = TDZ
// https://www.geeksforgeeks.org/temporal-dead-zone-in-javascript/

// console.log(a);
// // Temporal dead zone = TDZ
// const a = 10;
//
// console.log(b)
// var b = 22;



// TDZ
if(true) {
    let z = 10;
    const x = 20;
    // var c = 30;

    function v() {
        return 2 + 2;
    }
}
// TDZ

// console.log(v())
// console.log(c)
// console.log(x)
// console.log(z)


// for()
// while
// do..while
// switch
// {...code}
