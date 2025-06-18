// const iguser = new Object(); // Singleton Object
// const igUser ={}; // Non Singleton Object

const igUser ={}
igUser.name = "Divyansh";
igUser.age = 20;
igUser.location = "India";
igUser.isActive = true;

//console.log(igUser);

// Nesting Objects

const wtpUser = {
    fullname: {
        userFullname: {
            firstName: "Divyansh",
            lastName: "Srivastava"
        }
    }
}

//console.log(wtpUser.fullname.userFullname.firstName); // Divyansh

const obj1 ={1: "a", 2: "b", 3: "c"};
const obj2 = {4: "d", 5: "e", 6: "f"};
const obj3 = {7: "g", 8: "h", 9: "i"};

const obj4 = Object.assign({}, obj1, obj2, obj3);//  here {} is the target and obj1, obj2, obj3 are the sources
const obj5 = {...obj1, ...obj2, ...obj3}; // Using spread operator to merge objects
// console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f', '7': 'g', '8': 'h', '9': 'i' }
// console.log(obj5); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f', '7': 'g', '8': 'h', '9': 'i' }

// When values are from database or Api 

const userData = [
    {
        name: "Divyansh",
        age: 20,
        location: "India",
        isActive: true
    },
    {
        name: "John",
        age: 25,
        location: "USA",
        isActive: false
    },
    {
        name: "Jane",
        age: 22,
        location: "UK",
        isActive: true
    }
]
// console.log(userData[0].name); // Divyansh
// console.log(userData[1].age); // 25
// console.log(userData[2].location); // UK

// console.log(Object.keys(igUser));
// console.log(Object.values(igUser)); // [ 'Divyansh', 20, 'India', true ]
// console.log(Object.entries(igUser)); // [ [ 'name', 'Divyansh' ], [ 'age', 20 ], [ 'location', 'India' ], [ 'isActive', true ] ]

// console.log(Object.hasOwnproperty(igUser, "name")); // true
// console.log(Object.hasOwn(igUser, "age")); // true
// console.log(Object.hasOwn(igUser, "location")); // true
// console.log(Object.hasOwn(igUser, "isActive")); // true
// console.log(Object.hasOwn(igUser, "email")); // false
// console.log(Object.hasOwn(igUser, "fullname")); // false


// DESTRUCTURING OBJECTS

const course = {
    courseName: "JavaScript",
    courseDuration: "3 months",
    coursePrice: 1000,
    courseInstructor: "Divyansh Srivastava",
}

//Different way to access

const {courseInstructor} = course;
console.log(courseInstructor); // Divyansh Srivastava




