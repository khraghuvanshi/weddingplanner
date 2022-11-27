var numGuest = prompt("How many guests do you have?");
var numTables = prompt("How many tables do you want?");
var x = (numGuest/numTables);
x = Math.floor(x);

//var y = numGuest/numTables;
//y = Math.floor(y);
var tableOne = (numTables-1);
var tableTwo = numTables - tableOne;

var y = numGuest - (x*tableOne);
alert("Your " + numGuest + " guests will be seated as follows: " + tableOne + " tables of " + x +", and " + tableTwo + " table of " + y);