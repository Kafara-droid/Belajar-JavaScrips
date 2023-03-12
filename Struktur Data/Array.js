let myArray = ["Coklat", 42.5, 22, true, "Programing"];
myArray.push('JavaScript');

myArray.shift();
myArray.unshift("Buah");

console.log(myArray);

delete myArray[1];
myArray.pop();

console.log(myArray[0]);

myArray.splice(2, 1);

console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

console.log(myArray);

