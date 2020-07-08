"use strict";

/**
 *
 * @deprecated - square root of the sum of the cubes of a number
 */

const mass =[4, 2, 5, 19, 13, 0, 10];

let sum = 0;

for (let i=0; i< mass.length; i++){
         sum += Math.pow( Number(mass[i]) , 3);

}
console.log(Math.sqrt(sum));

