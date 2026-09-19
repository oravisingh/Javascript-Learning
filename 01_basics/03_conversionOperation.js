//Test Data

let num = 67
let name = "Ravinandan"
let isRaviAlive = true
let raviBalance = null
let raviAge = undefined

console.log(typeof num)
console.log(typeof(num))

console.log()
//Experiments



//String Conversions


let stringNumber = String(num)
console.log(typeof stringNumber)
console.log(stringNumber)

console.log()

let stringNull = String(raviAge)
console.log(typeof stringNull)
console.log(stringNull)

console.log("")

let stringUndefined = String(raviBalance)
console.log(typeof stringUndefined)
console.log(stringUndefined)

console.log("")

let stringBoolean = String(isRaviAlive)
console.log(typeof stringIsRaviAlive)
console.log(stringIsRaviAlive)

/*
number, boolean, undefined, null => string
but value remain entact as they were before conversion
*/

//Number Conversions

/*
let numberString = Number(name)
console.log(typeof numberString)
console.log(numberString)

console.log()

let numberNull = Number(raviBalance)
console.log(typeof numberNull)
console.log(numberNull)

console.log("")

let numberBoolean = Number(isRaviAlive)
console.log(typeof numberBoolean)
console.log(numberBoolean)

console.log("")

let numberUndefined = Number(raviAge)
console.log(typeof numberUndefined)
console.log(numberUndefined)

/*
strings, boolean, undefined, null => number
but string,undefined => NaN
null => 0
boolean => 1 or 0
*/

//Boolean Conversions

/*
console.log("Boolean Conversions")

let booleanString = Boolean(name)
console.log(typeof(booleanString))
console.log(booleanString)

console.log("")

let booleanNumber = Boolean(num)
console.log(typeof(booleanNumber))
console.log(booleanNumber)

console.log("")

let booleanNull = Boolean(raviBalance)
console.log(typeof(booleanNull))
console.log(booleanNull)

console.log("")

let booleanUndefined = Boolean(raviAge)
console.log(typeof(booleanUndefined))
console.log(booleanUndefined)

/*
string, number, undefined, null => boolean
but string => true
Undefined, null => false
number => true or false based on value
*/


console.log(Number(name))//Not a Number