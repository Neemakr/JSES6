class Person{
    constructor(name){
        this.name = name;
        this.occupation = "UnEmployed";
    }
    Greet(){
        console.log("Hi" + " " + this.name);
    }
}
class Student extends Person{
    constructor(name){
        super(name);
        this.occupation = "Student"
    }
    Greet(){
        console.log("Name:" + " " + this.name);
        console.log("Occupation:" + " " + this.occupation);
    }
}
const Stud = new Student("Saaanviiiii");
Stud.Greet();