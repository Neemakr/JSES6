const name = "Neema"
console.log('My', 'name', 'is', name);

const myArr = ["My", "name", "is", "Jack"];
console.log(myArr);

//If we use spread operator
console.log(...myArr);//equivalent to console.log('My', 'name', 'is', 'Neema')

//copy array using spread operator
const arr1 = ["one", "two"];
const arr2 = [...arr1, "three", "four", "five"];
console.log(arr2);

//In JS objects are assigned by reference and not by value so any change will effect the original array
const arr3 = [1,2];
const arr4 = arr3;
console.log(arr3);
arr3[2] = 3;
console.log(arr3);
console.log(arr4);

//[...arr] using this creates a copy of an array and any change in the array will not effect the original array
const arr5 = [3,4]
const arr6 = [...arr5];
arr6.push(5,6);
console.log(arr5);
console.log(arr6);

//Spread operator with objects
const obj1 = {
    one : "one",
    two : "two"
}
const obj2 = {
    three : "three",
    four : "four"
}
console.log({...obj1,...obj2});

//Creating a copy of object
const obj3 = {
    five : 'five!',
    six : 'six!'
}
const obj4 = {...obj3};
console.log(obj4);
obj4.seven = 'seven!';
console.log(obj3);
console.log(obj4);

//spread operator as a parameter is known as a rest parameter
function add(...args){
    console.log(args);
}
add(5,6);//Arguments are passed as array elements i.e displayed as a array elements

//We can also Pass multiple parameters to a function
function sum(a, b ,c, d){
    console.log(a + b + c + d); 
}
const num1 = [1, 2, 3, 4, 5, 6];
sum(...num1);