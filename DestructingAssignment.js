const person = {
    name : 'John',
    age : 54,
    gender : 'male'
}
console.log(person.name);
console.log(person.age);
console.log(person.gender);

//assigning values
let name = person.name;
let age = person.age;
let gender = person.gender;
console.log(name, age, gender);

const student = {
    namee : 'Neema',
    agee : 24,
    genderr : 'female'
}

//Destructing assignment
//let {namee, agee, genderr} = student;
//console.log(namee, agee, genderr);

//The order doesn't matter in destructing assignment
let {agee, namee, genderr} = student;
console.log(namee, agee, genderr);

//When destructuring objects, you should use the same name for the variable as the corresponding object key.
let {name1, age1, gender1} = student;
console.log(name1, age1, gender1);

//If you want to assign different variable names for the object key, you can use:
let {name : namep, age : agep, gender : genderp} = person;
console.log(namep, agep, genderp);