"use strict";
// lesson 01
let userName = 'victor';
console.log(userName);
let a = 12;
let b = 7;
let c = 5;
// console.log(a/b)
// console.log(c*b);
// lesson 02
let myName = 'Victor';
let meaningOfLife;
let isLoading;
let albuM;
let album;
myName = 'Oluwajuwon';
meaningOfLife = 42;
isLoading = true;
albuM = true;
album = 12;
const sum = (a, b) => {
    return a + b;
};
let postId;
let isActive;
let req = /\w+/g;
// lesson 03
// Arrays
let stgArray = ['hello', 'victor', 'welcome'];
let guiters = ['strat', 'les paul', 5150];
let mixedData = ['evh', 1984, true];
stgArray[0] = 'john';
stgArray.push("hey");
guiters[0] = 1984;
guiters.unshift('jim');
guiters = stgArray;
mixedData = guiters;
let test = [];
let bands = [];
bands.push('van halleen');
//Tuples
let myTuples = ['Dave', 43, true];
let mixed = ['john', 5, false];
myTuples[1] = 42;
// Objects
let myobject;
myobject = [];
console.log(typeof myobject);
myobject = bands;
myobject = {};
const exampleObj = {
    prop1: "Victor",
    prop2: true,
};
exampleObj.prop1 = 'oluwajuwon';
let evh = {
    name: 'vickky',
    active: true,
    album: [1929, 'devboy', 'urtfr']
};
let hnd = {
    name: 'vickky',
    active: true,
    album: [1929, 'devboy', 'urtfr']
};
let JP = {
    name: 'jaypaul',
    // active:false,
    album: [1, 'hislove', 1983]
};
const greetGuiterists = (guiterists) => {
    return `Hello ${guiterists.name}!`;
};
const greetSololists = (sololists) => {
    return `Hello ${sololists.name}!`;
};
console.log(greetGuiterists(JP));
console.log(greetSololists(hnd));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
// Literal types
let myNames;
let username;
username = 'Victor';
