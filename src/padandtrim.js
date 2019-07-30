
var paddingString = "Hello";

console.log(paddingString.padStart(5));

//Prefix Padding
console.log(paddingString.padStart(8 ,"Pre"));

//Postfix Padding
console.log(paddingString.padEnd(9,"Post"));

var trimString = "   Hello   ";

console.log(trimString.trim());

//Prefix trimming string
console.log(trimString.trimStart());

//PostFix trimming string
console.log(trimString.trimEnd());
