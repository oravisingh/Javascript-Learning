// This points to the current CONTEXT

const user = {
    name : "Ravinandan",
    age : 21,

    welcome : function(){
    console.log("Current Context ", this) // this points to the current object (user)
    console.log(`Hello, Welcome ${this.name}`); // if this were just name
    
}
}

user.welcome(); // Ravinandan
user.name = "Ravi"
user.welcome()// Ravi Since Ravi is now the current context of the object user

console.log(this)// The global object (window in browsers, global object in Node.js)


//Note : this and ${this} are not the same. ${this} is used to access the value of the current context and it does string interpolation, while this is used to refer to the current context itself.


/*******************************************************************/

function Chai(){
    this.username = "Baker"//creates a property called username on the global object.
    let name = "Ronny"
    console.log(`Hello, ${this.username}`) 
    console.log(`Hello, ${this.name}`) // will givve undefined since this only works with objects
    // console.log(this)
}
Chai()

console.log("\n******************************************************************************************\n")

/***************************Arrow Function i.e () => {} ************************/

const coffee = ()=>{
    let brand = "Nescafe"
    console.log(this.brand)//undefined
    console.log(this)//{}

}

coffee()

const add = (num1, num2)=>{
    return num1 + num2
}

//const add1 = (num1, num2)=>  num1 + num2 // Implicit return used for a single line of codes
//const add2 = (num1, num2)=> (num1 + num2) // return can be avoided writing when curly braces are not used

console.log(add(9,45))

const add2 = (num1, num2)=> ({model : "Suzuki"}) // the object as well is passed in the parenthesis to avoid ambiguity with the curly braces of the function body.

console.log(add2(45,23))