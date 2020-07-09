"use strict";

/**
 *
 * @deprecated Найдите квадратный корень из 587. Округлите результат
 * в большую и меньшую стороны, запишите результаты округления в объект
 * с ключами 'floor' и 'ceil'.
 */

let st = Math.sqrt(587);
let obj = {
    floor: Math.floor(st),
    ceil: Math.ceil(st),
}

/**
 * Даны числа 4, -2, 5, 19, -130, 0, 10.
 * Найдите минимальное и максимальное число.
 */

let maxNum = Math.max(4, -2, 5, 19, -130, 0, 10);

let minNum = Math.min(4, -2, 5, 19, -130, 0, 10);

console.log(maxNum);
console.log(minNum);
