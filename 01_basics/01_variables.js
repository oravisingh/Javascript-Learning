const accountID = 234445346
let accountEmail= "ravinandan@gmail.com"
var accountHolder ="Ravinandan"
branch = "Goh"//not recommended way of using variable without declaration keyword
let accountBalance;

console.table([accountID, accountEmail, accountHolder, branch])
// accountID = 8095834
accountEmail = "samrat@gmail.com"
accountHolder = "Samrat"


// console.log(accountHolder)
console.table([accountID, accountEmail, accountHolder, branch, accountBalance])

/*
Prefer not to use *var as it has scope issue
*/

