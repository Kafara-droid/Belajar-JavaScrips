const profile = {
    firtstName: "Fajar",
    lastName: "Nugraha",
    age: 22
}

let firtstName = "Dimas";
let age = 20;

({firtstName, age} = profile);
console.log(age);

// const {firtstName, lastName, age} = profile;

// console.log(firtstName, lastName, age);