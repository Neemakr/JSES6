//Static methods should be called on class only not on objects
class Car{
    constructor(brand){
        this.carName = brand;
    }
    static hello(){
        console.log("Hi");
    }
}
const myCar = new Car("Ford");
//myCar.hello();
Car.hello() + console.log(myCar.carName);

//If we want to use myCar object inside static method use it as a parameter
class Car1{
    constructor(name){
        this.name = name;
    }
    static greet(x){
        return 'Hello' + " " + x.name;
    }
}
const myCar1 = new Car1("Mustang");
console.log(Car1.greet(myCar1));

//This will not work - pass a parameter(if the parameter is used in Parent class and pass the object in Static function) in the static function or use object. instead of this. 
class Cars{
    constructor(brand, model){
        this.CarName = brand;
        this.model = model;
    }
    static greet(){
        //console.log("Hi This is" + this.CarName + this.model);
        console.log("Hi This is" + c.CarName + c.model);
    }
}
const c = new Cars("BMW", 2015);
Cars.greet();