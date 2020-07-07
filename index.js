"use strict";

balance(12, 3);
balance(11, 3);

/**
 *
 * @param {number} a
 * @param {number} b
 */

function balance(a, b,) {
    if ( a % b === 0) {
        console.log (`Делится; a / b = ${a / b}`);
    } else {
        console.log (`Делится с остатком; остаток: ${a % b} `);
    }
}
