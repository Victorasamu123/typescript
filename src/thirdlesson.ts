type One = string
type Two = string| number
type three = 'hello'

// convert to more or less specific
// example with as
let ab: One ="hello"
let ba = ab as Two //less specific type
let ca = ab as three // more specific 

//example with angle bracket
let d = <One>'world'
let e = <string | number>'world'

const addOrConcat = (a:number, b:number, c: "add" | "concat"): number | string=>{
  if(c==='add'){
    return a + b
  }else{
    return " "+ a + b
  }
}

let myVal: string = addOrConcat(2,2,'concat') as string

// Be careful because TS sees no problem - but a string is retured
let nextVal: number = addOrConcat(2,2,'concat') as number

// 10 as string
// unknown type
(10 as unknown)as string

// The DOMS
const img = document.querySelector('img') as HTMLImageElement
const myImg = document.getElementById('img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('img')

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
const year = document.getElementById('year') as HTMLSpanElement

const thisYear:string = new Date().getFullYear().toString()
  year.setAttribute('datetime',thisYear)
  year.textContent= thisYear