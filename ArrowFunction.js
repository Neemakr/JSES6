//Before 
let x = function(){
    console.log("Hello world");
}
x();

//Using Arrowfunction
let x1 = () => {
    console.log("Hello");
}
x1();

//If one parameter
let x2 = (name) => {
    console.log(name);
}
x2("Neema");

let a = name => {
    console.log(`Hi ${name}`);
}
a("Neema");

//Can omit return and curly brackets too if we have only one line
let b = name => name;
console.log(b("Daniel"));

//Arrow function as an expression
let age = 5;
let myFunction = (age < 18) ? () => console.log("Baby") : () => console.log("Adult");
myFunction();

//This inside a normal function
function person(){
    this.age = 24;
    this.name = "Neema";
    this.Nationality = function (){
        console.log(this.name);
        let innerFunction = function(){
            console.log(this.age);
            console.log(this);
        }
        innerFunction();
    } 
}
let p1 = new person();
p1.Nationality();

//This inside a Arrow function
function Person1(){
    this.name= "Hgj";
    this.age = 54;
    this.myFunc = function(){
        console.log(this.name);
        let myinnerFunc = () => {
            console.log(this.age);
            console.log(this);
        }
        myinnerFunc();
    }
}
let p2 = new Person1();
p2.myFunc();