const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites, ...others];

console.log(allFavorites);

const obj1 = {firtstName: 'Obi-Wan', age: 30};
const obj2 = {lastName: 'Kenobi', gender: 'Male'};

const nemObj = {...obj1, ...obj2};

console.log(nemObj);