"use strict";

let st = Math.sqrt(379);
let st1 = Math.round(st);
let st2 = Number((st-st1).toPrecision(1)) + st1;
let st3 = Number((st-st1).toPrecision(2)) + st1;

console.log(st);
console.log(st1);
console.log(st2);
console.log(st3);