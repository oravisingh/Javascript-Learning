// **************************Operations**************************
let someNumber = 67
let strNumber = String(someNumber)

console.log(strNumber)

//Arithmetic Operations
let negNumber = -someNumber
console.log(negNumber**2)
console.log(negNumber%2)

// String Concatenation
let str = "Hello"
console.log(strNumber + str)

//Prefix and Postfix
//Increment Operators first coerces the operand to numerical values
//They can only be applied to the operands that are references (eg objects and variables) and not to the evaluated value
// Like ++ to x or (++x) is OK but ++ to ++x or ++(++x) NOT OK
//Prefix increment operator increments the value of the operand and returns the incremented value
//Posrfix increment operator increments the value of the operand but returns the original value

inc = someNumber
++inc
console.log(inc)
inc++
console.log(inc)

let x = 3;
const y = ++x;
// x is 4; y is 4
console.log(x,y)

let x2 = 3n;
const y2 = ++x2;
// x2 is 4n; y2 is 4n
console.log(x2,y2)



//Anveyhiin
let num1,num2,num3,num4
num1 = num2 = num3 = num4 = 10
console.log(num1,num2,num3,num4)

//Playimg with strings and numbers
console.log("\nPlayimg with strings and numbers")

let val1 = 89
let val2 = 5
let val3 = 4
let str1 = 'Rajneesh'
let str2 = '3'

console.log(val1 + str1)
console.log(val1 + str2)
console.log(val1 + val2 + str2)
console.log(str2 + val1 + val2)
console.log(val1 + str2 + val2 + val3)

//This shows ki pehle number ka operartion possible hai to hoga
//Otherwise, sare string hi treat honge and concatenation hoga


console.log(+true)
console.log(+"")