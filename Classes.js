function Person(){
    this.name = "Sara",
    this.age = 26
}
const p = new Person();
console.log(p.name);

//Convert function into class
class Person1{
    constructor(){
        this.name = "Jenifer",
        this.age = 26
    }
}
const p1 = new Person1();
console.log(p1.name);

//class with parameters
class Person2{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const p2 = new Person2("Esha", 22);
console.log(p2.name, p2.age);

//methods in constructor
function Person3(){
    this.name = "Person3",
    this.greet = function(){
        console.log("Hi!");
    }
}
const p3 = new Person3();
p3.greet();

//methods in class constructor
class Person4{
    constructor(){
        this.name = "Anushka";
    }
    greet(){
        console.log("Hello! method in class constructor");
    }
}
const p4 = new Person4();
p4.greet();

//Setters and Getters in constructor
class Person5{
    constructor(){
        this.name = "Jackieeee"
    }
    get getName(){
        return this.name;
    }
    set setName(name){
        this.name = name;
    }
}
const p5 = new Person5();
console.log(p5.getName);
console.log(p5.setName = "Buddieeeee");

//Hoisting in class - A class should be defined before using it. Unlike functions and other JavaScript declarations, the class is not hoisted
/*const p6 = new person6("Sanvi");
class person6{
    constructor(name){
        this.name = name;
    }
}
console.log(p6.name);*/

//Inside the class it is always Use strict. All the code inside class is automatically in Strict mode
class Person7{
    constructor(){
        //let a;
        a = 8;
        console.log(a);
    }
}
const p7 = new Person7();

b = 8;
console.log(b);
var b;

//typeof
console.log(typeof person5);