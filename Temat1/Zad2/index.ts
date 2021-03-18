interface Person {
    name: string;
    surname: string;
    age: number;
    role: string;
    // TODO: dodać pola: imię (string), nazwisko (string), wiek (number) oraz rola (string)
    }
    
    const users: Person[] = [
        { name: 'John', surname: 'Smith', age: 25, role: 'user'},
        { name: 'Adam', surname: 'Johnson', age: 35, role: 'user'},
        { name: 'Andy', surname: 'Cole', age: 18, role: 'user'},
    ]
    
    const admins: Person[] = [
        { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin'},
        { name: 'Adam', surname: 'Terry', age: 24, role: 'admin'},
    ]
    
    function logPerson(person: Person) {
        console.log(`${person.name} ${person.surname}, ${person.age}, ${person.role}`);
            
    
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
    }
    
    function filterPersons(persons: Person[], criteria: any): Person[] {
        return persons.filter(person => {
            let criteriaKeys = Object.keys(criteria) as (keyof Person)[];
            return criteriaKeys.every((fieldName) => {
                return person[fieldName] === criteria[fieldName];
            }
        )})
    };
    
    // TODO:
    // 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
    // 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
    // 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
    // 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
     
    users.forEach(element => {
        logPerson(element);
    });
    admins.forEach(element => {
        logPerson(element);
    });

    const allUsers: Person [] = [...users, ...admins];

    allUsers.forEach(element=>{logPerson(element);});

    const userOlderThan25: Person[] = allUsers.filter(user=>user.age>25);
    const filtered = filterPersons(allUsers, {name: `Adam`});
    console.log(filtered);

