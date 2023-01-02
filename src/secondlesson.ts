// functions
const add=(a:number,b:number):number=>{
    return a+b
}
// for functions that do not return any thing type void is used
const logMsg=(message:any):void=>{
     console.log(message)
}

logMsg('jffjgjggj')
logMsg(999)
logMsg(true)
// type functions
let substracts = function(c:number,d:number):number{
     return c-d
}

type  mathFunction = (a:number, b:number)=>number
// interface  mathFunction {
//      (a:number, b:number):number
// }

let muiltlpy:mathFunction=function(c,d){
    return c*d
}
logMsg(muiltlpy(4,4))

// optional parameters
const addAll=(a:number,b:number,c?:number):number=>{
    if (typeof c !== 'undefined'){
        return a + b + c
    }else{
        return a + b
    }
}
// defaults param value
const sumAll=(a:number=10,b:number,c:number=2):number=>{
        return a + b + c
}
logMsg(addAll(2,3,2))
logMsg(addAll(2,3))
logMsg(sumAll(undefined,3))

// Rest parameters
const total=(a:number,...nums:number[]):number =>{
     return a+ nums.reduce((prev,curr)=>prev+curr)
}
logMsg(total(10,2,3,4))

// nevertype
const createError =(errMsg:string):never =>{
    throw new Error(errMsg)
}

const infinite =()=>{
    let i:number=1
    while(true){
        i++
        if(i>100)break
    }
}

// use of the never type
const numberOrString=(value:string|number):string =>{
    if(typeof value==='string')return 'string'
    if(typeof value==='number')return 'number'
    return createError('this should never happen!!')
}