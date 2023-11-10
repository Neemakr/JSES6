const arr = [1, 2, 3];
let [x, y, z] = arr;
console.log(x, y, z);

//Assign default values
const arrValue = [10];
let [i = 5, j = 7] = arrValue;
console.log(i);
console.log(j);

//Passing default values in Object constructor
const obj = {
    name : 'Alexa',
}
let {name , age = 8} = obj;
console.log(name);
console.log(age);

//Swapping variables
let a = 4;
let b = 5;
[a,b] = [b,a];
console.log(a, b);

//Skip items
const u = ['one', 'two', 'three'];
let [c , , d] = u;
console.log(c,d);

//Assigning the remaining elements to a single variable by using Spread operator
const numbers = ['one', 'two', 'three'];
let [e, ...f] = numbers;
console.log(e,f);

//We can also assign the rest of the properties of the object to a single variable using the spread operator
const person = {
    firstname : "Alexa",
    age : 41,
    gender : 'female'
}
let {firstname, ...remaining} = person;
console.log(firstname, remaining);

//The remaining elements cannot be at the start of the array it should be at the last only
const num = ['one', 'two', 'three', 'four'];
//let [...g, h] = num;

//Nested Destructing Assignment
const numb = ['one', ['two', 'three']];
let [k, [l, m]] = numb;
console.log(k, l, m);

//Nested Object destructing Assignment
const student = {
    firstName : "John",
    lastName : "Doe",
    Hobbies : {
        read : true,
        playGame : true
    }
}
let {firstName, lastName, Hobbies : {read, playGame}} = student;
console.log(firstName, lastName, read, playGame);
console.log(student.Hobbies.read);
console.log(student["Hobbies"]["read"]);