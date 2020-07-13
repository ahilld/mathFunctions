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

console.log(obj);

/**
 * Даны числа 4, -2, 5, 19, -130, 0, 10.
 * Найдите минимальное и максимальное число.
 */

let maxNum = Math.max(4, -2, 5, 19, -130, 0, 10);

let minNum = Math.min(4, -2, 5, 19, -130, 0, 10);

console.log(maxNum);
console.log(minNum);

/**
 * @deprecated - Выводит на экран случайное целое число от 1 до 100.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */

getRandomInt(1, 100);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * @deprecated - Заполните массив 10-ю случайными целыми числами.
 *
 */

const randomNumbersMass = {};

for (let i = 0; i < 10; i++) {
    randomNumbersMass[i] = getRandomInt(-1000000000, 100000000);
}

console.log(randomNumbersMass);

/**
 * @deprecated - Даны переменные a и b. Найдите найдите модуль разности a и b.
 */

function getMathAbs(a, b) {
    let c = a - b;
    console.log(Math.abs(c));
}

getMathAbs(20, 45);

/**
 * @deprecated - Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c.
 * Сделайте так, чтобы в любом случае в переменную c записалось положительное значение.
 */

function getAbsC(a, b) {
    let c = Math.abs((a - b));
    console.log(c);
}

getAbsC(3, 5);
getAbsC(6, 1);

/**
 * @deprecated - Дан массив arr. Найдите среднее арифметическое его элементов.
 * Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
 */

const arr = [12, 15, 20, 25, 59, 79];
let c = 0;
for (let i = 0; i < arr.length; i++) {
    c += arr[i];
}
console.log(c / arr.length);

/**
 * @deprecated -Напишите скрипт, который будет находить факториал числа
 *
 */

function getFactorial(n) {
    let factorial = 1
    for (let i = 1; i <= n; i++){
         factorial *= i;
    }
    console.log(factorial);
        }

getFactorial(4);