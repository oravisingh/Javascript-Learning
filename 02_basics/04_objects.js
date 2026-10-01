//Now by Constructor method

const tinderUser = new Object(


    // console.log("Hi! I am on Tinder!")
)

tinderUser.id = "ronny@002"
tinderUser.name = "Ravinandan"
tinderUser.age = 21

// console.log(tinderUser)


//nested object possible
const regularUser = {
    email : "orns@206.com",
    age : 21,
    linkdIn : {
        name : "Ravinandan",
        connection : 675,
        certificate : {
            name : "Ravinandan",
            issuer : "IIT Bhubaneshwar"
        }
    }
}
console.log(regularUser.linkdIn?.certificate.issuer) //Just Note : Optional Chaining ( ? )

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = { 
    3 : "c",
    4 : "d"
}

//const obj3 = Object.assign({}, obj1, obj2) //first one is taken as target object and the rest are source
//or
const obj3 = {...obj1, ...obj2} // the spread function 
console.log(`Type ${typeof obj3}`)
console.log(obj3)

// Array and Objects
const users = [
    {
        id : 123,
        name : "Ravinandan"
    },
    {
        id : 345,
        name : "Shivam"
    },
    {
        id : 456,
        name : "Ronny"
    }
]
console.log(users[2].name)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("account"))//used to check if the desired element is there
