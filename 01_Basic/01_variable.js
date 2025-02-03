const accountId = 144553
let accountEmail ="Manthan@gmail.com"
var accountPassword ="12345"
accountCity ="Jaipur"
let accountState;

//accountId = 2 //not allowed

accountEmail = "hcc@hc.com"
accountPassword ="15221115"
accountCity ="Bengalore"

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and funtional scope
*/


console.table([accountId,accountState,accountEmail, accountCity, accountPassword])