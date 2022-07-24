import Person from './Person'

const Persons = ({filterValue, filteredPersons, persons, deletePerson}) => {
    if (filterValue === "") {
        return (
            <div>
                {persons.map(person => (
                    <Person key = {person.name} person = {person} deletePerson = {deletePerson}/>
                ))}
            </div>
        )
    }
    else {
        return (
            <div>
                {filteredPersons.map(person => (
                    <Person key = {person.name} person = {person} deletePerson = {deletePerson}/>
                    ))}
            </div>
        )
    }
}

export default Persons