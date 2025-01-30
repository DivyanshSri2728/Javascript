// PRIMITIVE DATATYPES
// 7 types of primitive data types: string, number, boolean, null, undefined, symbol, bigint

const score = 100
const scoreValue = 100.34
const isLoggedIn = true
const outsideTemp= null
let name;

const id = Symbol("133")
const anotherId = Symbol("133")
// console.log(id === anotherId)//false
const bigNum = 23387289547386578352952n
// console.log(typeof bigNum)//bigint;


// REFERENCE DATATYPES(NON-PRIMITIVE DATATYPES)
// 1. Arrays
// 2. Object Literals
// 3. Functions

const heros = ['Ironman', 'Thor', 'Hulk', 'Captain America']//Array
const myObj={
    name: 'Divyansh',
    age: 23
}
const myFuction = function(){
    // console.log('helllo world')
}


// console.log(typeof heros)//object
// console.log(typeof myObj)//object
// console.log(typeof myFuction)//function

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Types of memeory in JS
// 1. Stack Memory => Primitive Datatypes
// 2. Heap Memory => Reference Datatypes(NON-PRIMITIVE DATATYPES)

//Stack Memory
let myYoutubeName="Divyansh2728"
let anootherName = myYoutubeName
// console.log(anootherName)//Divyansh2728
anootherName="Divyansh"
// console.log(anootherName)//Divyansh
// console.log(myYoutubeName)//Divyansh2728

let client1={
    email:"sdivyansh789",
    upi:"sdivyansh789@okicici"
}

let client2 = client1

client1.email= "srashi885@google.com"

console.log(client1.email)
console.log(client2.email)

