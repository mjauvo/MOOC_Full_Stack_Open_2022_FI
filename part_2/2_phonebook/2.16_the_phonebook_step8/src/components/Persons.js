import Person from './Person'

const Persons = ({filterValue, filteredPersons, persons}) => {
    if (filterValue === "") {
        return (
            <div>
                {persons.map(person => (
                    <Person key = {person.name} person = {person} />
                ))}
            </div>
        )
    }
    else {
        return (
            <div>
                {filteredPersons.map(person => (
                    <Person key = {person.name} person = {person} />
                ))}
            </div>
        )
    }
}

export default Persons