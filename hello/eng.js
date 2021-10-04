var hello = require("./hello.json");

var sayhello = function() {
    console.log(hello.eng);
}

module.exports = sayhello;