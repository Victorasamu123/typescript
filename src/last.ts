// Utility Types

// Partial
interface Assignment{
    studenId: string,
    title: string,
    grade:number,
    verified?:boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate:Partial<Assignment>):Assignment =>{
    return{...assign, ...propsToUpdate}
}

const assign1:Assignment={
    studenId:'compsci123',
    title:'Final project',
    grade:0,
}
console.log(updateAssignment(assign1,{grade:95}))
const assignGraded:Assignment = updateAssignment(assign1,{grade:95})

//Required and Readonly

const recordAssignment= (assign:Required<Assignment>):Assignment =>{
    //send to database, etc.
    return assign
}

const assignVerified: Readonly<Assignment> = {...assignGraded,verified:true}

// recordAssignment({...assignGraded})

//Record
const hexColorMap: Record<string, string> ={
      red:'FF0000',
      green:'00FF00',
      blue:'0000FF',
}

type Students= 'sara' | 'kelly'
type LetterGrades = 'A' | 'B' | 'C' | 'D' |  'U'

const finalGrades: Record<Students, LetterGrades>={
    sara:'U',
    kelly:'A'
}

interface Grades {
    assign11: number,
    assign12: number,
}

const gradeData: Record<Students , Grades> = {
    sara: {assign11: 90, assign12: 95 },
    kelly: {assign11: 90, assign12: 95 }
} 

//Pick and Omit
type assignResult= Pick<Assignment, 'studenId'|'grade'>

const score: assignResult={
    studenId:'k890',
    grade:85,
}

type AssignPreview= Omit<Assignment, 'grade' |'verified'>

const preview: AssignPreview={
    studenId:'k7890',
    title:'Final project'
}

// Exclude and Extract 

type adjustedGrade= Exclude<LetterGrades,'U'>

type highGrades = Extract<LetterGrades, 'A'|'B'>

// Nonnullable

type AllPossibleGrades = 'Victor'| 'John'|null|undefined

type NamesOnly = NonNullable<AllPossibleGrades>

// Return Types

// type newAssign = { title:string, points:number}

const createNewAssign = ( title: string, points:number)=>{
     return{ title,points}
}

type newAssign = ReturnType<typeof createNewAssign>

const tsAssign: newAssign = createNewAssign('utility Types',100)
console.log(tsAssign)

//Parameter
type AssignParams = Parameters<typeof createNewAssign>

const assignArgs:AssignParams=['Generics',100]

const tsAssign2:newAssign= createNewAssign(...assignArgs)
console.log(tsAssign2)

//Awaited - helps us with the ReturnType of a promise

interface User {
    id:number,
    name:string,
    username:string,
    email:string
}