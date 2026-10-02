function one(){

    const username = "Ravinandan"

    function two(){
        const website = "Youtube"
        console.log(username)// We can access this variable because it is global to this function
    }

    two() // This will execute anyway since the execution of code here is line by line

    //console.log(website) //But We cant access it as this variable is local and confined to the function two() 
   
}

one()

if(true){
    const username = "Ravinandan"

    if(username == "Ravinandan"){
        const website = "Youtube"

        console.log(username + website)// Here both the things can be accessed since it has both variables's scope
    }

    //console.log(username + website)// But here it no longer has the scope of the variable website
}
//console.log(username) //Samehere as of above

/*************************************INTERESTING*************************************************/


//Functions can be accessed from anywhere in the code 
Num1(8)

function Num1(num){
    return num + 1
}

// But when they are in an expression they can't be //This function is already delared to a variable
// That is hoisting Problem
Num2(56)

const value = function Num2(num){
    return num + 2
}