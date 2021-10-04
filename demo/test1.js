//Object
var obj = {
    sayhello: "Hello Nodejs"
}
console.log(obj.sayhello);
console.log(obj['sayhello']);

var prop = "sayhello";
console.log(obj[prop]);

console.log("--------")
//Functions and Arrs
var arr = [];

arr.push(function() {
    console.log("Hello 1");
});
arr.push(function() {
    console.log("Hello 2");
});
arr.push(function() {
    console.log("Hello 3");
});

arr[1]();

console.log("--------")

//For
arr.forEach(function(item){
    item();
});