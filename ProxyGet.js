const student = {};
const proxy = new Proxy(student, {
    get : function(o, p){
        console.log(o);
        console.log(p);
    }
});
proxy.difficulty;

const Handler = {
    get : (o,p) => {
        return o + p;
    }
}
const proxy1 = new Proxy(student, Handler);
console.log(proxy1.difficulty);

//Return decode
const proxy2 = new Proxy(student, {
    get : () => {
        return "Decode";
    }
});
console.log(proxy2.firstName);

//run through objects
const gamesettings = {
    //difficulty : "Easy"
};
const gamesettingsProxy = new Proxy(gamesettings, {
    get : function(o,p){
        return o[p];
    }
});
console.log(gamesettingsProxy.difficulty);
console.log(gamesettings.difficulty);

//Get the object property if its present else return "Object not defined"
const Animals = {
    Lion : "King of the Jungle"
}
const proxy3 = new Proxy(Animals, {
    get : function(obj, prop){
        return obj[prop] ? obj[prop] : "Property is not defined";
    }
});
console.log(proxy3.Lion);
console.log(proxy3.Giraffe);

//Get Handler
const Handler1 = {
    get(obj, prop){
        return obj[prop] ? obj[prop] : prop + " " + "This property isn't defined";
    }
}
const proxy4 = new Proxy(Animals, Handler1);
console.log(proxy4.Lion);
console.log(proxy4.Giraffe);