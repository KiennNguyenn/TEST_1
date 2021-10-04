function person() {
    this.message = "Hello Nodejs!!!";
    this.sayhello = function() {
        console.log(this.message);
    }
}

module.exports = new person();