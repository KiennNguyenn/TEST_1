var events = require("./config");
var Emitter = require("./emitter");
var emitter = new Emitter();

emitter.on(events.bad_score, function(){
    console.log("Da co diem kiem!")
})
emitter.on(events.bad_score, function(){
    console.log("Can thong bao toi PH!")
})

//Co 1 bang diem
var diem = [10, 4, 1];
for(var s of diem){
    if (s < 5){
        console.log("Diem thap!", s);
        emitter.emit(events.bad_score);
    }
}