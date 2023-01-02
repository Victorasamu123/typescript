"use strict";
// functions
const add = (a, b) => {
    return a + b;
};
// for functions that do not return any thing type void is used
const logMsg = (message) => {
    console.log(message);
};
logMsg('jffjgjggj');
logMsg(999);
logMsg(true);
// type functions
let substracts = function (c, d) {
    return c - d;
};
// interface  mathFunction {
//      (a:number, b:number):number
// }
let muiltlpy = function (c, d) {
    return c * d;
};
logMsg(muiltlpy(4, 4));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
// defaults param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(undefined, 3));
// Rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3, 4));
// nevertype
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    return createError('this should never happen!!');
};
