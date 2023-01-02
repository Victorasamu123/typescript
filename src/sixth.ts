// Typescript generics
const echo = <T>(arg :T): T=> arg

const isObj= <T>(arg:T) : boolean=>{
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

console.log(isObj(true))
console.log(isObj('john'))
console.log(isObj([1,2,3]))
console.log(isObj({name:'john'}))
console.log(isObj(null))

// Example one
const isTrue =<T>(arg:T): {arg:T,is:boolean}=>{
    if(Array.isArray(arg) && !arg.length) {
        return { arg, is : false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return { arg, is:false}
    }else{
        return { arg, is:!!arg}
    }
}

console.log(isTrue(false))
console.log(isTrue(0))
console.log(isTrue(true))
console.log(isTrue(1))
console.log(isTrue('Victor'))
console.log(isTrue(''))
console.log(isTrue(null))
console.log(isTrue(undefined))
console.log(isTrue({}))//modified
console.log(isTrue({name:'Victor'}))
console.log(isTrue([])) //modified
console.log(isTrue([1,2,3]))
console.log(isTrue(NaN))
console.log(isTrue(-0))


interface BoolCheck<T>{
    value:T,
    is:boolean,
}

const checkBoolValue =<T>(arg:T): BoolCheck<T>=>{
    if(Array.isArray(arg) && !arg.length) {
        return { value:arg, is : false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return { value:arg, is:false}
    }else{
        return { value:arg, is:!!arg}
    }
}

interface HasId {
    id:number
}

const processUsr = <T extends HasId>(user:T):T=> {
    //process the user with logic here
    return user
}

console.log(processUsr({id:1,name:'Victor'}))
// console.log(processUsr({name:'Victor'}))

const getUserProp = <T extends HasId, K extends keyof T>(users: T[], key:K):T[K][] => {
    return users.map(user=>user[key])
}

const userArray=[{id:1,name:'Victor'},{id:2,name:'Dave'},{id:3,name:'Asamu'},{id:4,name:'Mary'},{id:5,name:'Favour'}]

console.log(getUserProp(userArray,'name'))
console.log(getUserProp(userArray,'id'))

class StateObject <T>{
    private data:T

    constructor(value:T){
        this.data=value
    }

    // get state:T{
    //     return this.data
    // }

    set state(value:T){
        this.data = value
    }
}
const Store = new StateObject<string>('john')
console.log(Store.state)
Store.state='vvvb'
// Store.state=87