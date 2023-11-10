const Houses = {
    Type1 : "Apartment",
    Type2 : "Igloo"
}
const Handler = {
    set : function(obj, prop, value){
        return obj[prop] = value;
    }
}
const proxy = new Proxy(Houses, Handler);
proxy.Type1 = "Cottage";
console.log(Houses);

//Adding new property 
proxy.Type3 = "Villa";
console.log(Houses);