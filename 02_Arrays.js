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



