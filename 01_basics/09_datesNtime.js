let todaydate = new Date()//or we can also define any full date specifically
console.log(typeof todaydate)
console.log(todaydate)

console.log(todaydate.toString())

console.log(todaydate.toDateString())
console.log(todaydate.getTime())
console.log(todaydate.getDay())
console.log(todaydate.getMonth() + 1)

console.log(`The time ${todaydate.toLocaleString()}`)

//let createDate = new Date(2026, 7, 1)//month starts with 0
//let createDate = new Date(2004, 7, 1, 14, 22)//month starts with 0
let createDate = new Date("08-01-2004")//month starts with 0
console.log(createDate.toLocaleString())

let myTimeStamp = Date.now()//from Jan 01 1970
console.log(myTimeStamp)
console.log(`${Math.floor(myTimeStamp/1000)} seconds`)//inSeconds i.e divide by 1000


/**********************************Playing with the locale Stiring**********************************/
console.log(createDate.toLocaleString("en-GB",{timeZone : "IST"}))


