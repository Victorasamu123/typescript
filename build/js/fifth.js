"use strict";
// Index Signatures
// interface TransactionObj{
//     readonly [index:string]:number
// }
const todayTransactions = {
    Pizza: -10,
    Books: -5,
    Job: +50,
};
console.log(todayTransactions.Pizza);
console.log(todayTransactions['Pizza']);
let prop = 'Pizza';
console.log(todayTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todayTransactions));
// todayTransactions.Pizza=40
console.log(todayTransactions['Dave']);
const student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200]
};
// console.log(student.test)
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
const monthlyIncome = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncome) {
    console.log(monthlyIncome[revenue]);
}
