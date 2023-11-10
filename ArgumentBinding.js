let x = function(){
    console.log(arguments);
}
x(2,6,7);

//In Arrow function Argument Binding doesn't work
/*let y = () => {
    console.log(arguments);
}
y(4,5,6);*/

//To solve this issue we can use spread operator
let z = (...n) => {
    return n;
}
console.log(z(50, 60, 70));