const myArr= [1, 2, 3, 4, 5, true, false, null, undefined, "Divyansh", "Divyansh", 2.5, 2n,];
// console.log(myArr[0]);//1
// console.log(myArr[1]);//2
// console.log(myArr[2]);//3
// console.log(myArr[3]);//4
// console.log(myArr[4]);//5
// console.log(myArr[5]);//true
//JavaScript arrays can hold multiple data types and even duplicate values.They are resizable, meaning you can add or remove elements dynamically.


const myHeros2 = new Array('Ironman', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye');
console.log(myHeros2[0]);//Ironman
// ARRAYS

const Array= [0,2,3,4,4,5,6,7,8]
const myHeros = ['Ironman', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye']
// console.log(myHeros[0]);//Ironman


// Array Methods
myHeros.push('Spiderman')// Adds the element at the end of the array
myHeros.push('Superman')//
// console.log(myHeros);//[ 'Ironman', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye', 'Spiderman', 'Superman' ]
// myHeros.pop()// Removes the element from the end of the array
// console.log(myHeros);//[ 'Ironman', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye', 'Spiderman' ]

const newArray = [1,2,3,4,5]
// newArray.unshift(0)
// console.log(newArray);//[ 0, 1, 2, 3, 4, 5 ]
// newArray.shift()
// console.log(newArray);//[ 1, 2, 3, 4, 5 ]

console.log( newArray.includes(3));//true
console.log(newArray.indexOf(2));//1

// const arr = newArray.join()
// console.log(arr);//1,2,3,4,5
// console.log(newArray);
// console.log(typeof arr);//string

console.log("A", newArray);

const newAr1 = newArray.slice(1,3)
console.log(newAr1);//[ 2, 3 ]

const newAr2 = newArray.splice(1,3)
console.log(newAr2);//[ 2, 3, 4 ]
console.log("array after Spliced", newArray);
