"use strict";
// convert to more or less specific
// example with as
let ab = "hello";
let ba = ab; //less specific type
let ca = ab; // more specific 
//example with angle bracket
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    else {
        return " " + a + b;
    }
};
let myVal = addOrConcat(2, 2, 'concat');
// Be careful because TS sees no problem - but a string is retured
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string
// unknown type
10;
// The DOMS
const img = document.querySelector('img');
const myImg = document.getElementById('img');
const nextImg = document.getElementById('img');
// img.src
// myImg.src
// copyright.js
// const year = document.getElementById('year')
// const thisYear = new Date().getFullYear()
// year.setAttribute('datetime',thisYear)
// year.textContent= thisYear
// ist variation
// let year:HTMLElement | null 
// year = document.getElementById('year')
// let thisYear: string
// thisYear = new Date().getFullYear().toString()
// if(year){
//   year.setAttribute('datetime',thisYear)
//   year.textContent= thisYear
// }
// 2nd variation
const year = document.getElementById('year');
const thisYear = new Date().getFullYear().toString();
year.setAttribute('datetime', thisYear);
year.textContent = thisYear;
