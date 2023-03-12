// let lastname;
// lastname = "Fajar";

// console.log(lastname);

// let lastName = "Fajar Nugraha";

// console.log(lastName);

// expression

let x = 10;
let y = 5;

x += y;

console.log(x);

const isRaining = true;

console.log("Persiapan sebelum berangkat kegiatan.");
if (isRaining) {
    console.log("Hari ini hujan. Bawa payung.");
}

let firtstName = "John";
console.log(firtstName);
let lastName = "Doe";
console.log(lastName);

let age = 25;
console.log(age);

const isMarried = true;
console.log("Menikah");
if(isMarried){
  console.log("Hari yang berbahagia");
};


let language = "French";
let greeting = "Selamat Pagi"

if(language === "English") {
    greeting = "Good Morning!";
} else if(language === "French") {
    greeting = "Bonjour!"
} else if(language === "Japanese") {
    greeting = "Ohayou Gozaimasu!"
}

console.log(greeting);


function scoreChecker(score) {
    let result;
  
    // TODO
    score = 80;

    if(score === 90){
        result = "Selamat! Anda mendapatkan nilai A.";
    }else if(score === 80){
        result = "Anda mendapatkan nilai B.";
    }
  
  
    // Jangan hapus kode ini
    return result;
  }