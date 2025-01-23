let score="33abc";
//console.log(typeof score);//string
//console.log(typeof(score));//string

let valueInNumber=Number(score);
//console.log(typeof(valueInNumber));//number
//console.log(valueInNumber);//NaN

// NaN => Not a Number
// 33=>33
// "33"=>33
// "33abc"=>NaN
// true=>1; false=>0
// null=>0
// undefined=>NaN
// ""=>0


let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);//true

// 0=>false
// 1=>true
//""=>false
//"abc"=>true
//************************ OPERATIONS *************************** */
let num=3
let negNum=-num
console.log(negNum);//-3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);//2^3
// console.log(2%2);
// console.log(2/2);

let strnum="2";
let strnum2="3";
let strnum3= strnum+strnum2;
console.log(strnum3);//23

console.log("1"+2);//12
console.log(1+"2");//12
console.log(1+2);//3
console.log("1"+2+3);//123
console.log(1+2+"3");//33

