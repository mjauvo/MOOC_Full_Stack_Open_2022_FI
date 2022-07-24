import { useState, useEffect } from 'react'
import personService from './services/persons'

import Header    from './components/Header'
import Filter    from './components/Filter'
import Persons   from './components/Persons'
import InputForm from './components/InputForm'
import Title     from './components/Title'

// --------------------------------------------------------------------------------

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName ] = useState("")
    const [newNumber, setNewNumber ] = useState("")

    const [filteredPersons, setFilteredPersons ] = useState([])
    const [filterValue, setfilterValue ] = useState("")

    useEffect(() => {
        personService
            .getAllPersons()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])
  
    const handleNameChange = (event) => {
        let inputValue = event.target.value
        setNewName(inputValue)
    }

    const handleNumberChange = (event) => {
        let inputValue = event.target.value
        setNewNumber(inputValue)
    }

    const handleFilterChange = (event) => {
        let inputValue = event.target.value
        setfilterValue(inputValue)
  
        let filteredValues = persons.filter((person) =>
            person.name.toLowerCase().includes(inputValue.toLowerCase())
        )
        setFilteredPersons(filteredValues)
    }

    const resetForm = () => {
        setNewName('');
        setNewNumber('');
    }

    const addPerson = (event) => {
        event.preventDefault()

        // Either field is empty
        if (!newName || !newNumber) {
            alert("Name and number fields must both contain a value!");
        }
        // Both fields contain a value
        else {
            const newPersonObject = {
                name: newName,
                number: newNumber
            }
    
            const personExists = persons.find((p) => p.name === newName)
      
            if (personExists) {
                alert(`Name '${newName}' is already added to phonebook!`)
                resetForm()
            }
            else {
                personService
                    .createPerson(newPersonObject)
                        .then(returnedPerson => {
                            setPersons(persons.concat(returnedPerson))
                            resetForm()
                        })
            }
        }
    }

    return (
        <div>
            <Title title = "Phonebook" />
            <Filter value = {filterValue} handleFilterChange = {handleFilterChange}/>
            <Header header = "Add new contact"/>
            <InputForm addPerson = {addPerson}
                       newName = {newName}
                       handleNameChange = {handleNameChange}
                       newNumber = {newNumber}
                       handleNumberChange = {handleNumberChange} />
            <Header header = "Contacts" />
            <Persons filterValue = {filterValue}
                     filteredPersons = {filteredPersons}
                     persons = {persons} />
        </div>
    )
}
  
export default App