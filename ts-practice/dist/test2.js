"use strict";
function number(number) {
    return number.reduce((acc, cur) => acc + cur, 0);
}
const total = number([1, 2, 3, 4, 5]);
