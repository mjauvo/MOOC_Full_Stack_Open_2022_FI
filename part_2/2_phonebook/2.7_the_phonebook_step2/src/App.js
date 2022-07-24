import { useState } from 'react'

const Person = ({person}) => {
    return (
        <p>{person.name}</p>
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
    const [persons, setPersons] = useState([{ name: "Arto Hellas" }])
    const [newName, setNewName] = useState("")

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName
        }

        const nameList = persons.map(person => person.name)

        if (nameList.includes(newName)) {
            alert(`Name '${newName}' is already added to phonebook`)
        }
        else {
            setPersons(persons.concat(personObject))
        }

        setNewName("")
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit = {addPerson}>
                <div>
                    name: <input value = {newName} onChange = {handleNameChange} />
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