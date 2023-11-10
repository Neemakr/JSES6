class Person{
    constructor(){
        this.firstName = "Neema";
    }
}
let p = new Person();

//Adding a new property
p.Nationality = "Indian";
console.log(p.Nationality);

//Changing the value using object created
p.firstName = 'John';
console.log(p.firstName);

//Creating another object
let p1 = new Person();
console.log(p1.firstName);

//Creating a copy and changing
let x = Person;
x.firstName = "Doe";
console.log(x.firstName);

console.log(p1.firstName);
console.log(p.firstName);

//Adding a property in a constructor
p.lastName = "K R";
console.log(p.lastName);
console.log(p1.lastName);

//Adding a method in a constructor
p1.greet = function(){
    console.log('Hi');
}
p1.greet();
//p.greet();//error

Person.prototype.Gym = "Leg day";
console.log(p.Gym);
console.log(p1.Gym);

Person.prototype.Gym = "Shoulders";
console.log(p.Gym);
console.log(p1.Gym);

Person.prototype = {Gym : "Back"};
console.log(p.Gym);
console.log(p1.Gym);
const p2 = new Person();
console.log(p2.Gym)