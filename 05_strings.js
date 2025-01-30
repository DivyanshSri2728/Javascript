const name = "Divyansh"
const age = 23
// FOR CONCATENATION
// console.log(name + age + "value");//Divyansh23value

// BETTER WAY TO CONCATENATE => STRING INTERPOLATION( DONE USING BACKTICKS (``) )
//console.log(`My name is ${name} and my age is ${age}`);//My name is Divyansh and my age is 23

const gameName = new String("GTA V")
// console.log(gameName[0]);//G
// Accessing the Prototype methods of String
// console.log(gameName.length);//5
// console.log(gameName.toLowerCase());//gta v
// console.log(gameName.charAt(2));//A
// console.log(gameName.indexOf('A'));//2

// STRING SLICING
const newstring ='Divyansh'
//console.log(newstring.substring(0,4));//Divy
const newstring2 = newstring.slice(-3,-1);
//console.log(newstring2);

const newVar= '      HelloEveryone     '
// console.log(newVar);//      HelloEveryone
// console.log(newVar.trim());//HelloEveryone

const url= 'https://www.divyansh%20Srivastava%20@google.com'
console.log(url.replaceAll('%20','_'));//https://www.divyansh_Srivastava_@google.com

const stringVar= 'My-name-is-Divyansh-Srivastava'
console.log(stringVar.split('-'));//[ 'My', 'name', 'is', 'Divyansh', 'Srivastava' ]
