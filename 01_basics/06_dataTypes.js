/********Primitive DataTypes and Non- Primitive Data Types**************/


//Primitive Data Types :- Think it as call by value. 
// It means that when we assign a primitive data type to a variable,
//  it stores the actual value in memory.
//  7 Primitive data types in JavaScript are:
// 1. Number
// 2. String
// 3. Boolean 
// 4. Undefined
// 5. Null
// 6. Symbol (ES6)
// 7. BigInt (ES2020)


let num = 10; // Number
let str = "Hello"; // String
let myWeakness = null
let ID = Symbol(22190503044)
let newID = Symbol(22190503044) 

console.log(ID===newID)
console.log(`ID type: ${typeof ID} & newID type: ${typeof newID}`) // These are backticks not single apostrophe

const myBigInt = 1234567890123456789012345678901234567890n; // BigInt


// Non-Primitive Data Types :- Think it as call by reference.
// It means when they are assigned to a variable,
//  it stores the reference to the value in memory.
// The Non-Primitive Data Types are:
// 1. Array
// 2. Object
// 3. Function

//Without const/let, you create an accidental global variable.

const superHeros = ["IronMan", " Captain America", "Thor"]

let identification = {
    name : "IronMan",
    isRich : true
};

const welcomeFun = function(){ // or fuction WelcomeFun(){}
    console.log("Hello World \n ")
}

console.log(superHeros)
welcomeFun()

console.log(typeof welcomeFun ) //object fuction //all non- primitive DataTypes are of object types

console.log(typeof superHeros)
console.log(typeof identification)


/***********************Stack and Heap Memory********************/
console.log("\nNow this is about the memory.")

//Stack me aati hain Primitive data types i.e the copy of the
// actual data is given when assigned to new one.
let myName = "Ravinandan"
let yourName = myName//actual value i.e "Ravinandan"
yourName = "Siddharth"//value of yourName changed not of myName

console.log(myName)
console.log(yourName)

//Heap me aati hain Non-Primitive Data types i.e the reference/address
//  of the value is passed when the value is assigned to a new one.

let myAccount = {
    Name:"Ravinandan",
    email :"ornsamrat2004@gmail.com"
}

let yourAccount = myAccount // reference has been passed
yourAccount.Name = "Ranjneesh" // changed at the reference

console.log(yourAccount.Name)
console.log(myAccount.Name)