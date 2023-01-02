// lesson 01

let userName = 'victor'
console.log(userName)

let a: number = 12
let b: number = 7
let c: number = 5

// console.log(a/b)

// console.log(c*b);

// lesson 02

let myName: string = 'Victor';
let meaningOfLife :number;
let isLoading :boolean;
let albuM :any;
let album :string|number;

myName = 'Oluwajuwon'
meaningOfLife=42
isLoading=true
albuM=true;
album= 12

const sum =(a:number,b:string)=>{
    return a+b
}

let postId :string|number;
let isActive :boolean|number|string;

let req: RegExp=/\w+/g;

// lesson 03

// Arrays
let stgArray = ['hello','victor','welcome']

let guiters =['strat', 'les paul' , 5150]

let mixedData=['evh',1984,true]

stgArray[0]= 'john'
stgArray.push("hey")

guiters[0]=1984
guiters.unshift('jim')
guiters=stgArray
mixedData=guiters

let test =[]
let bands:string[]=[]
bands.push('van halleen')

//Tuples
let myTuples :[string,number,boolean]=['Dave',43,true]

let mixed=['john',5,false]

myTuples[1]=42

// Objects
let myobject:object
myobject=[]
console.log(typeof myobject)
myobject=bands
myobject={}

const exampleObj={
    prop1:"Victor",
    prop2:true,
}

exampleObj.prop1='oluwajuwon'

type Guiterists ={
    name:string,
    active?:boolean,
    album:(string|number)[],
}

interface Sololists{
    name?:string,
    active:boolean,
    album:(string|number)[],
}

let evh:Guiterists={
    name:'vickky',
    active:true,
    album: [1929, 'devboy','urtfr']
}
let hnd:Sololists={
    name:'vickky',
    active:true,
    album: [1929, 'devboy','urtfr']
}

let JP:Guiterists={
    name:'jaypaul',
    // active:false,
    album:[1,'hislove',1983]
}


const greetGuiterists=(guiterists: Guiterists)=>{
     return `Hello ${guiterists.name}!`
}

const greetSololists=(sololists: Sololists)=>{
    return `Hello ${sololists.name}!`
}

console.log(greetGuiterists(JP))
console.log(greetSololists(hnd))

// Enums
enum Grade {
    U=1,
    D,
    C,
    B,
    A,
}
console.log(Grade.A)

// type allases
type stringOrNumber=string|number

type stringOrNumberArray=(string|number)[]

type Sololist={
    name?:string,
    active:boolean,
    album:stringOrNumberArray,
}

type UserId= stringOrNumber

// Literal types
let myNames:'Victor'

let username: 'Victor'| 'thatgirl' |'amy'
username = 'Victor'