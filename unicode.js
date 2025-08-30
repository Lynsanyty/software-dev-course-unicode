//Practice Problem #1, exercise #1

let inputString = "Lyn";
let sumCodePoints = inputString.charCodeAt(0) + inputString.charCodeAt(1) + inputString.charCodeAt(2);
console.log(sumCodePoints);

// exercise #2
let codes = [76, 97]
let combinedString = String.fromCharCode(codes[0]) + String.fromCharCode(codes[1]);
console.log(combinedString);


// exercise #3

let exString = "Lola";
let index1 = 0;
let index2 = 3;
let codePointDifference = Math.abs(exString.charCodeAt(index1) - exString.charCodeAt(index2));

console.log(codePointDifference);

//Practice Problem #3, Task 1

let inputString1 = "Code";
let firstCodePoint = inputString1.charCodeAt(0)
let thirdCodePoint = inputString1.charCodeAt(2)

//Task 2

let codeHell = [72, 101, 108, 108];
let wordFromCodePoints =  String.fromCharCode(codeHell[0]) + String.fromCharCode(codeHell[1]) + String.fromCharCode(codeHell[2]) + String.fromCharCode(codeHell[3]);

//Task 3

let inputString2 = "Launch";
let firstChar = inputString2.charCodeAt(0);
let secondChar = inputString2.charCodeAt(1);
let thirdChar = inputString2.charCodeAt(2);
let fourthChar = inputString2.charCodeAt(3);
let fifthChar = inputString2.charCodeAt(4);
let lastChar = inputString2.charCodeAt(5); 

let swappedString = String.fromCharCode(lastChar) + String.fromCharCode(secondChar) + String.fromCharCode(thirdChar) + String.fromCharCode(fourthChar) + String.fromCharCode(fifthChar) + String.fromCharCode(firstChar);

console.log(swappedString);

console.log({
  firstCodePoint,
  thirdCodePoint,
  wordFromCodePoints,
  swappedString,
});
