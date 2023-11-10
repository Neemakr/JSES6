//Avoid using arrow function inside objects
const Person = {
    firstName : "Neema",
    myFunction : () => {
        console.log(this.firstName);
    }
}
Person.myFunction();

//Cannot use Arrow function as a constructor
let x = () => {
    this.Nationality = "Indian";
} 
const myobj = new x();
console.log(myobj.Nationality);