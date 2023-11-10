//Default parameters
function myFunc(x = 3, y = 5){
    return x + y;
}
console.log(myFunc(5,2));
console.log(myFunc(41));
console.log(myFunc());

let sum = () => 15;
console.log(sum());

//Passing function as a default parameter
let i = function(x, y = x * sum()){
    return x + y;
}
console.log(i(10));

//Passing undefined as a parameter
let d = function(x = 2){
    console.log(x);
}
d(undefined);