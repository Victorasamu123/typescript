"use strict";
// Utility Types
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studenId: 'compsci123',
    title: 'Final project',
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
//Required and Readonly
const recordAssignment = (assign) => {
    //send to database, etc.
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// recordAssignment({...assignGraded})
//Record
const hexColorMap = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF',
};
const finalGrades = {
    sara: 'U',
    kelly: 'A'
};
const gradeData = {
    sara: { assign11: 90, assign12: 95 },
    kelly: { assign11: 90, assign12: 95 }
};
const score = {
    studenId: 'k890',
    grade: 85,
};
const preview = {
    studenId: 'k7890',
    title: 'Final project'
};
// Return Types
// type newAssign = { title:string, points:number}
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign('utility Types', 100);
console.log(tsAssign);
const assignArgs = ['Generics', 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
