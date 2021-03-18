var Person = /** @class */ (function () {
    function Person(personName, personSurname, age) {
        this.personName = personName;
        this.personSurname = personSurname;
        this.age = age;
    }
    Person.prototype.show = function () {
        document.body.innerHTML = "<h1>Hello " + this.personName + " " + this.personSurname + ". It seems like you're " + this.age + "yo</h1>";
    };
    return Person;
}());
var p = new Person("John", "Blake", 11);
p.show();
