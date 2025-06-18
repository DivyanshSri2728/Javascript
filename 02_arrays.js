// const marvel_heros = ["ironman", "hulk", "thor", "spiderman", "captain america"];
// const dc_heros = ["batman", "superman", "wonder woman", "flash", "aquaman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

//SPREAD METHOD
// const all_new_heros = [...marvel_heros, ...dc_heros];
//nsole.log(all_new_heros);

//FLAT METHOD
const nestedarray = [1, 2, [3, 4, [5, 6]]];
const flatArray = nestedarray.flat(2); // 2 is the depth level
//nsole.log(flatArray); // [1, 2, 3, 4, 5, 6]

console.log(Array.isArray("arvel_heros")) //false
console.log(Array.from(("marvel_heros"))); // [ 'm', 'a', 'r', 'v', 'e', 'l', '_', 'h', 'e', 'r', 'o', 's' ]
console.log(Array.from({name:"divyansh"}));// returns an empty array because the object is not iterable !!interesting

const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1, score2, score3));

