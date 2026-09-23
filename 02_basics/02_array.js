const marvelHeros = ["Thor", " SpiderMan", " IromMan", " CaptainAmerica"]
const dcHeros = [" SuperMan", " Batman", " Flash", " WonderWoman"]

// marvelHeros.push(dcHeros)//aas we know ki array koi bhi data le leta hai to isliye isne ek array ko hi element bana liya
// console.log(marvelHeros)
// console.log(marvelHeros[4][2])

// const allHeros = marvelHeros.concat(dcHeros)//same as  above if not saved in another variable
// console.log(allHeros)

//Or concatenate them using spread operator -> same results

const allHeros = [...marvelHeros, ...dcHeros]//Spread Operator //same as  above if not saved in another variable
console.log(`The spread values are : ${allHeros}`)

numArray = [2, 4, 6, 1, [5, 3, 9, 0],56,34, [69, 9,[23, 45, 67, 98, [1, 2, 3, 4, 5] ]]] 
usable_numArrray = numArray.flat(3)// or type "Infinity" if the depth is not clear
console.log(usable_numArrray)


console.log(Array.isArray("Ravinandan"))
console.log(Array.from("Ravinandan"))
console.log(Array.from({Name : "Ravinandan"}))//interesting case that returns an empty array as it has not been initialized for key or value explicitely


const valArr1 = 45
const val_Arr2 = 67 
console.log(Array.of(usable_numArrray, marvelHeros, valArr1, val_Arr2))