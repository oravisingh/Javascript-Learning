//Objects are declared in two ways i.e like literals and like constructor
//Singleton : only made with constructors


//Object Lilterals Method

//A bit about Symbols
console.log(Symbol("id") === Symbol("id"));//symbols with the same description are still distinct:

const mySym = Symbol("key1")// A symbol needs to be defined earlier in order to be used in ab object 

const JsUser = {
    name : "Shivam",
    "mobNo" : 6205147343,//keys are intrinsically treated as Strings or Symbols
    location : "Ranchi",
    age : 21,
    "e-mail" : "ornsamrat2004@gmail.com",// Explicitly stringed key cannot be accesed with ( . ) they have to be accessed with ( [] )
    isLoggedIn : true,
    [mySym] : "key4" , // Symbols can only be accssed with ( [] ) and assigned as well

}

//Values are mapped like key and value like arrays but difference is that here you can define key and value.

console.log(JsUser["age"])
console.log(JsUser.name)
console.log(`${JsUser["e-mail"]} , ${typeof "e-mail"}`)
console.log(`${JsUser[mySym]} , ${typeof mySym} `)// No string format is used

console.log("The Alteration Part")

JsUser.location = "Goh"
console.log(JsUser.location)
// Object.freeze(JsUser)//Freezes the Object that stops further modification to an object
// JsUser.location = "Patna" 
// console.log(JsUser.location)

console.log(JsUser)

//Playing with the Functions
//In Objects fucntions can be treated as some variable 
JsUser.greetings = function(){
    console.log("Hello! This is Shivam")
}
JsUser.greetings2 = function(){
    console.log(`Hello! This is ${this.name}`)//this is used to refer to the properties of the same object
}

//console.log(JsUser.greetings)//[Function (anonymous)]
console.log(JsUser.greetings())
console.log(JsUser.greetings2())