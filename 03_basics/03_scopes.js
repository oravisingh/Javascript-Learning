let a = 20 // let and const are similar broadly
const b = 30 // the difference is that let can be modified but const cannot be modified

var c = 40 //This variable is universally accesed and modified So not recommended to use

// console.log("Original : ",a)
// console.log("Original : ",b)
console.log("Original : ",c)

if (true){

    let a = 500
    const b = 398
    var c = 75

    // console.log("Inside : ",a)
    // console.log("Inside : ",b)
    console.log("Inside : ",c)

}


// console.log("Outside : ",a)
// console.log("Outside : ",b)
console.log("Outside : ",c)



// Crux : The Global Variable can be acesses from anywhere but they wont be altered off their original value globally even when used and witten locally inside scope
// Whereas the local variables ( i.e. {}  i.e. inside a scope )can only be accessed locally