const name = "Ravinandan Samrat"//primitive
const email = "   ornsamrat2004@gmail.com    "
const gameName = new String("Valorant")//non-primitive

console.log(gameName)
console.log(name[1])
console.log(name.toUpperCase())//The original value is not modifies ykw
console.log(gameName.indexOf("o"))
console.log(gameName.charAt(7))
console.log(gameName[4])
console.log(gameName.at(4))
console.log(gameName.__proto__)
console.log(name.length)
console.log(gameName.toLowerCase())

console.log(name.substring(1, 5))
console.log(name.slice(-15, 5))// can even use -ve indexing

console.log(`Trimmed Text. Before: ${email} and After: ${email.trim()}`)

let url = "https://ravinandansamrat/ravi%20folder"
console.log(url.replace("%20","_"))
console.log(url.search("ravi"))//return first index of matched value
console.log(url.includes("ravi"))

newurl = url.split("/",3)// the searator and the limit
console.log(newurl)