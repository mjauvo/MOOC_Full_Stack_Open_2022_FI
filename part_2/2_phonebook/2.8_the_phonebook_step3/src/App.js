import { useState } from 'react'

const Person = ({person}) => {
    return (
        <p>{person.name} {person.number}</p>
    )
}

const Persons = ({persons}) => {
    return (
        <>
            {persons.map((person, key) =>
                <Person key={key} person={person} />
            )}
        </>
    )
}

const App = () => {
    const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "123-4567890" }])
    const [newName, setNewName] = useState("")
    const [newNumber, setNewNumber] = useState("")

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber
        }

        const nameList = persons.map(person => person.name)

        if (nameList.includes(newName)) {
            alert(`Name '${newName}' is already added to phonebook`)
        }
        else {
            setPersons(persons.concat(personObject))
        }

        setNewName("")
        setNewNumber("")
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit = {addPerson}>
                <div>
                    <p>Name:<br/><input value = {newName} onChange = {handleNameChange} /></p>
                    <p>Number:<br/><input value = {newNumber} onChange = {handleNumberChange} /></p>
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <Persons persons = {persons} />
        </div>
    )
}

export default App