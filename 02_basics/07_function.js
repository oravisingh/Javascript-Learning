//Shopping Cart type problem

function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(5))


function calculateCartPrice(...num1){//Rest Operator // Stores in Array
    return num1
}

console.log(calculateCartPrice(5.5,65.67,78,32))


function calculateCartPrice2(val1, val2, ...num1){ //val1 and val2 got the first two values
    return num1
}

console.log(calculateCartPrice2(5.5,65.67,78,32))


prod1 = {
    name : "Shoes",
    price : 3999
}

prod2 = {
    name : "Jeans",
    price : 2999
}

function handleObject(...anyObject){ // Testing it complicated
    console.log(`The product is ${anyObject[1].name} and it's price is ${anyObject[1].price} `)
}

handleObject(prod1, prod2)

handleObject({
    name : "Badminton",
    price : 1499
},
{
    name : "Cycle",
    price : 14999
}
)

// Playing with array

const newArr = [34, 56, 23, 88]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(newArr))

console.log(returnSecondValue([45, 78, 98, 23, 12, 80]))