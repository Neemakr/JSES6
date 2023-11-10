function Person(){
    this.name = "Neema",
    this.age = 24;
}
let person1 = new Person();
console.log(person1.name);
let person2 = new Person();
console.log(person2.age);

class Add {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        console.log(x + y);
    }
}
let a = new Add(3,4); 

class car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}
let car1 = new car("BMW", 2014)
let car2 = new car("Audi", 2019);
console.log(car1.name + " " + '\n' + car2.name);