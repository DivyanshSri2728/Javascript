let mydate = new Date()
// console.log(mydate);//2021-08-02T06:30:00.000Z
// console.log(mydate.toDateString());//Mon Aug 02 2021
// console.log(mydate.toTimeString());//12:00:00 GMT+0530 (India Standard Time)
// console.log(mydate.toLocaleString());//8/2/2021, 12:00:00 PM
// console.log(mydate.toJSON());
// console.log(typeof mydate);//object

//let myChoiceDate1 = new Date(2024 , 0 , 3)
// let myChoiceDate2 = new Date(2024 , 0 , 3 , 5 , 30) // Array of year, month, date, hours, minutes
let myChoiceDate3 = new Date("2004-11-01")// Array of year, month, date, hours, minutes
// console.log(myChoiceDate1.toDateString())// Wed Jan 03 2024
// console.log(myChoiceDate2.toLocaleString())//3/1/2024, 5:30:00 am
// console.log(myChoiceDate3.toLocaleString())//11/1/2004, 12:00:00 am
// console.log(myChoiceDate3.toLocaleDateString());//1/11/2004
// console.log(myChoiceDate3.toLocaleTimeString());//  12:00:00 am


let myTimestamp = new Date()
// console.log(myTimestamp.getTime());//1627871400000
// console.log(myChoiceDate3.getTime());
// console.log(Math.floor(myChoiceDate3.getTime()/(1000)));

// console.log(Math.floor(myChoiceDate3.getTime()/(1000*60*60*24*365)));//34

// console.log(myChoiceDate3.getFullYear());
// console.log(myChoiceDate3.getMonth())

// For more cuastomization in locale string //
console.log(myChoiceDate3.toLocaleString('default',{
    weekday: 'long',
    year: 'numeric',
}));










