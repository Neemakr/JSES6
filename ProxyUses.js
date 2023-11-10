//For Validation
const Books = {
    Book1 : "The Subtle Art of Not Giving A Fuck",
    Book2 : "IkiGai"
}
const proxy = new Proxy(Books, {
    get : (obj, prop) => {
        if (obj[prop] == "IkiGai"){
            return obj[prop];
        }
        else {
            return "Not Allowed";
        }
    }
});

console.log(proxy.Book1);
console.log(proxy.Book2);

//Read only
const Handler = {
    set : function(obj, prop, value){
        if(obj[prop]){
            console.log("Read only");
        }
    }
}
const proxy1 = new Proxy (Books, Handler);
proxy1.Book1 = "Harry Potter";
console.log(proxy1.Book1);

//To call another function
const Handler1 = {
    set : function(obj, prop, value){
        if (prop == "Book1" && value == "The Subtle Art of Not Giving A Fuck"){
            myFunction();
        }
        else{
            console.log("Can access Book1 proprty only");
        }
    }
}
function myFunction(){
    console.log("This is a demo of proxy validation to call another function");
}
const proxy2 = new Proxy(Books, Handler1); 
proxy2.Book1 = "The Subtle Art of Not Giving A Fuck";
proxy2.Book1 = "Harry Potter";