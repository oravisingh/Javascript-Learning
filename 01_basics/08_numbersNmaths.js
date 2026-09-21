const score = 400
console.log(score)

const balance = new Number(100.7969)
console.log(balance)

console.log(balance.toString().length)
console.log((balance.toString())[0])//accesing the first number

console.log(balance.toFixed(2)) // limits the digit precision and also rounds up to the nearest value and the argument passed counts after the decimal(.)

const otherNum = 345.7979
console.log(otherNum.toPrecision(5))// introduces precision to the numbers and the argument given counts for the whole number

const hundreds = 10000000000//difficult to count the 0s
console.log(hundreds.toLocaleString('en-IN')) // or just leave the bracket for the US standards

/****************************Maths**********************************/
console.log(Math)
console.log(Math.abs(-89))
console.log(Math.round(4.78))
console.log(Math.E)
console.log(Math.ceil(6.8) + Math.floor(6.8))
const r = 21
console.log(`The area of a Circle of radius ${r}cm : ${(Math.PI * (r**2)).toFixed(2)} sq cm`)

console.log(Math.sqrt(49))

console.log(Math.max(2,5,7,9,12,7,0))
console.log(Math.min(2,5,7,9,12,7,0))
console.log(Math.random())//Generated values between 0 and 1
console.log(Math.ceil(Math.random()*10 + 1 ))//Trick for generating values beyond 0 and 1
// 1 is added so that when the generated value is 0.0--- then it does not become 0 at all

//Generating random Numbers between a range

const min = 12
const max = 23
console.log(Math.floor(Math.random() * (max- min + 1)) + min)