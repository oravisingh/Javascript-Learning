/*****************Equality check and comparison operators*****************/

console.log("\nPlaying with numbers")
console.log(2 > 4)
console.log(4 >= 4)


/****Avoid the followimg types of Comparisons as there are inconsistencies****/
console.log("\nPlaying with numbers and strings")
console.log("5" > "4")
console.log("5" >= "4")

console.log("\nPlaying with null and undefined")
console.log(null == undefined)//Equality check
console.log(null === undefined)//Strict equality check (no type conversion i.e the operands must be similar and equal)
console.log(null > undefined)

console.log("\nPlaying with null")
console.log(null > 0)
console.log(null >= 0)
console.log(null < 0)

/*Comparison oprations first use the ToNumber conversion to convert the operands to numbers and then compare them.*/