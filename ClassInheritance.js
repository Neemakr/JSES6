class Person{
    constructor(name){
        this.name = name;
    }
    greet(){
        return `Hi ${this.name}`;
    }
}
class student extends Person{

}
let s1 = new student("Jack");
console.log(s1.greet());

//Super() keyword
class Car{
    constructor(brand){
        this.carName = brand;
    }
    present(){
        return 'I have a' + ' ' + this.carName;
    }
}
class Model extends Car{
    constructor(brand, model){
        super(brand);
        this.model = model;
    }
    show(){
        return this.present() + ' ' + 'It is a' + ' ' +this.model;
    }
}
let m = new Model("Ford", "Mustang");
console.log(m.brand);//Undefined as it refers to the parent class
console.log(m.show());