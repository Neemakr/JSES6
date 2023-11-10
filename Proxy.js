//Empty Handler
const student = {
    name : "Neema"
}
const CheckProperty = {};
const proxyObject = new Proxy(student, CheckProperty);
console.log(proxyObject.name);
console.log(proxyObject.Nationality);

//Method 2
const proxy1 = new Proxy(student, {});
console.log(proxy1.name);
console.log(proxy1.Nationality);

const person = {
    //Homiee : "dfgvh"
};
const proxy2 = new Proxy(person, {
    get : function(o,p){
        console.log(o);
    }
})
proxy2.Homiee;