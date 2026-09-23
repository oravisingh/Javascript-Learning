// /*******************Arrays*******************/

// const myArray = [10,34,67,87,65,"Shivam"]//can be heterogeneous, resizable, nested
// const myArr = new Array(5,4,73,7,98)
// console.log(`Data Type: ${typeof myArray} and the values: ${myArray}`)
// console.log(myArray[3])
// console.log(myArr[2])

// //Array Methods
// myArr.push(6.7)//value added unshift() is added to the beginning of the element
// console.log(myArr)
// myArr.pop()//deletes the last element
// console.log(myArr)

// myArray.unshift("Ravinandan")//adds in the beginning
// console.log(myArray)
// myArray.shift()//deletes from the beginning
// console.log(myArray)

// console.log(myArray.includes("Ravinandan"))


// //Coverts to a String

// const convArr = myArr.join()
// console.log(`Data type: ${typeof convArr} and the values: ${convArr}`)



//Slice and Splice
console.log("Slicing and Splicing!")

const numArr = [4,8,3,9,2,0,6,1]

console.log(`The Original Array : ${numArr}`)

const numArr1 = numArr.slice(2,6)//return copy of the specifies portion of th array and not alters it
console.log(`The Sliced Part : ${numArr1}`)
console.log(`The Array after Slicing : ${numArr}`)

const numArr2 = numArr.splice(2,6)//return the cut element specified from the array and also alters the array 
console.log(`The Spliced Part : ${numArr2}`)
console.log(`The Array after Splicing : ${numArr}`)



//Shallow Copy : Created a referenced copy
//Deep Copy: Created an unreferenced copy