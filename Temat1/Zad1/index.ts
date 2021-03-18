


class Person {
    personName: string; //Imie
    personSurname: string; //Nazwisko
    age: number; //Wiek
    
    constructor(personName, personSurname, age){
        this.personName = personName;
        this.personSurname = personSurname;
        this.age = age;
    }

    show(){
        
        document.body.innerHTML = `<h1>Witaj ${this.personName} i ${this.personSurname} mam ${this.age} lat</h1>`;
        
    }
}

let p = new Person("John", "Blake", 11);
p.show();
