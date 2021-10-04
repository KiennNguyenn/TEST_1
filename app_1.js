//Các cách khai báo và sử dụng module
var hello_1 = require("./hello_1");
hello_1();

var hello_2 = require("./hello_2").sayhello;
hello_2();

var hello_3 = require("./hello_3");
hello_3.sayhello();
hello_3.message = "Changed";
var hello_3_v2 = require("./hello_3");
hello_3_v2.sayhello();

var hello_4 = require("./hello_4");
var Hello_4 = new hello_4();
Hello_4.sayhello();

var hello_5 = require("./hello_5").abc;
hello_5();