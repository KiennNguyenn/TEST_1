var obj = {
    name: "Kien Nguyen",
    sayhello: function(param1, param2){
        console.log(`Hello ${this.name}`);
    }
}
obj.sayhello();

var obj1 = {
    name: "Kien Nguyen",
    sayhello: function(param1, param2){
        console.log(`Hello ${this.name}`);
    }
}
obj1.sayhello.call({name: "Thuy Trang"});
obj1.sayhello.apply({name: "Thuy Trang"});

var obj2 = {
    name: "Kien Nguyen",
    sayhello: function(param1, param2){
        console.log(`Hello ${this.name}`);
        console.log("Param: ", param1, param2);
    }
}
obj2.sayhello("Xin chao", "2020");
obj2.sayhello.call({name: "Thuy Trang"}, "Xin chao", "2021");
obj2.sayhello.apply({name: "Thuy Trang"}, ["Xin chao", "2022"]);
