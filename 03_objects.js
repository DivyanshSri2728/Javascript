//Singleton
//Onjectliteral
const mySym = Symbol("mySymbol"); 

const JsUser ={
    name: "Divyansh",
    "full name": "Divyansh Srivastava",
    mySym: "symbol1", // Using the Symbol as a property value
    age: 20,
    loacation: "India",
    isActive: true,
    email:"divyangsh@google.com",
    lastActive :["Monday", "Tuesday", "Wednesday"],
}
// console.log(JsUser.age);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym);

//Update the values of Object
JsUser.age = 21;
// console.log(JsUser.age); // 21

//lock the object
// Object.freeze(JsUser);
// //JsUser.age = 22; // This will not work because the object is frozen
// console.log(JsUser.age); // 21


//Creating Functions inside Objects

JsUser.greetings = function(){
    console.log("Helloo Js User");
}
JsUser.greetingsTwo = function(){
    console.log(`Helloo Js User ${this.name}`);
}


console.log(JsUser.greetings);
console.log(JsUser.greetings()); // Helloo Js User
console.log(JsUser.greetingsTwo()); // Helloo Js User Divyansh
