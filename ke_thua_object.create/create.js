var person = {
    firstname: "",
    lastname: "",
    getfullname: function(){
        return this.firstname + " " + this.lastname;
    }
}

var SBD1 = Object.create(person)
SBD1.firstname = "Nguyen";
SBD1.lastname = "Kien";

console.log(SBD1.getfullname());