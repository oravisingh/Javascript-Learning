//Function is like a package that is used to reduce the redundancy of the code in order to do the same work

//Also keep in mind the concept of scopes i.e. Local Variable and Global Variable

const add = function(a,b){//parameters
    return c = a + b // Since we have not assigned type hence JavaScript will handle the discrepencies in the ways possible
    console.log("Nothing is execcuted after the sysntax return")
}

console.log(add(4,5))//arguments



function sayMyName(){
    console.log("Ravinandan".toUpperCase())
    
}

sayMyName()


function userLoginMessage(username){
    return `${username} just logged in!`
}

console.log(userLoginMessage("Ravinandan")) // undefined just logged in if no value is passed

function userLoginMessage1(username){// There can also be a default value for the parameter in case no value is passed and that default value will be overridden if a value is passed eg. username = "Mona"
    if (!username){ // or username === undefined or username === null
        console.log("Please enter a valid username!")
        return // when functions do not have return value the default return value is undefined
    }
    return `${username} just logged in!`
}

console.log(userLoginMessage1())
