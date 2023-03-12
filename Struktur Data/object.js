const user = {
    firtstName: "Fajar",
    lastName: "Nugraha",
    age: 19,
    isJedi: true,
    "home world": "Sukabumi"
};

console.log(`Hallo, nama saya ${user.firtstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user["home world"]}`);

const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
spaceship.class = "Light freigter";

delete spaceship.manufacturer;

console.log(spaceship);