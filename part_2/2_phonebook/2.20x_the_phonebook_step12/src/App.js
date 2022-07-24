import { useState, useEffect } from 'react'
import personService from './services/persons'

import Title        from './components/Title'
import Header       from './components/Header'
import Filter       from './components/Filter'
import Persons      from './components/Persons'
import InputForm    from './components/InputForm'
import Notification from './components/Notification'

// --------------------------------------------------------------------------------

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName ] = useState("")
    const [newNumber, setNewNumber ] = useState("")

    const [filteredPersons, setFilteredPersons] = useState([])
    const [filterValue, setFilterValue] = useState("")

    const [message, setMessage] = useState(null)
    const [messageType, setMessageType] = useState(null)

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
        setFilterValue(inputValue)
  
        let filteredValues = persons.filter((person) =>
            person.name.toLowerCase().includes(inputValue.toLowerCase())
        )
        setFilteredPersons(filteredValues)
    }

    const resetForm = () => {
        setNewName('')
        setNewNumber('')
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        // Either 'name' field or 'number' field is empty
        if (!newName || !newNumber) {
            alert("Name and number fields must both contain a value!")
        }
        // Both fields contain a value
        else {
            const newPersonObject = {
                name: newName,
                number: newNumber
            }

            const foundPerson = persons.find((p) => p.name === newName)

            // Person exists in the phonebook
            if (foundPerson) {
                const { id } = foundPerson;
                const updateConfirmation = window.confirm(`Contact '${foundPerson.name}'  is already added to phonebook. Replace the old number with a new one?`)

                if (updateConfirmation) {
                    updatePerson(id, newPersonObject);
                }
            }
            // Person does not exist in the phonebook
            else {
               addPerson(newPersonObject);
            }
        }
    }

    const addPerson = (personObject) => {
        personService
            .createPerson(personObject)
                .then(returnedPerson => {
                    setMessageType('success')
                    setMessage(`New contact '${personObject.name}' was added.`)
                    console.log(messageType, ':', message)
                    setTimeout(() => {
                        setMessage(null)
                    }, 2000)
                    setPersons(persons.concat(returnedPerson))
                })
                .catch((error) => {
                    setMessageType('error')
                    setMessage(`Unable to add contact '${personObject.name}' to the phonebook!`)
                    console.log(messageType, ": ", message)
                    setTimeout(() => {
                        setMessage(null)
                    }, 2000)
                    resetForm();
                })
                resetForm()
    }

    const updatePerson = (id, personObject) => {
        personService
            .updatePerson(id, personObject)
                .then((returnedPerson) => {
                    setMessageType('success')
                    setMessage(`Contact '${personObject.name}' was updated.`)
                    console.log(messageType, ": ", message)
                    setTimeout(() => {
                        setMessage(null)
                    }, 2000)
                    resetForm()

                    setPersons(
                        persons.map((person) =>
                            person.id !== id ? person : returnedPerson

                        ))
                })
                // trying to update a contact which does not exist in the database
                .catch((error) => {
                    setMessageType('error')
                    setMessage(`Contact '${personObject.name}' does not exist on the server!`)
                    console.log(messageType, ": ", message)
                    setTimeout(() => {
                        setMessage(null)
                    }, 2000)
                    resetForm()
                    // alert(`'${personObject.name}' does not exist in the phonebook!`)
                    const filteredPersons = persons.filter((person) => person.id !== id)
                    setPersons(filteredPersons)
                    setFilterValue("")
                })
                resetForm();
    }

    const deletePerson = (id) => {
        const person = persons.find((p) => p.id === id)
        const deleteConfirmation = window.confirm(`Delete '${person.name}'?`)

        if (deleteConfirmation) {
            personService
                .deletePerson(id)
                    .then(() => {
                        setMessageType('success')
                        setMessage(`Contact '${person.name}' was deleted from the phonebook.`)
                        console.log(messageType, ": ", message)
                        setTimeout(() => {
                            setMessage(null)
                        }, 2000)
                        resetForm();
                        const filteredPersons = persons.filter((person) => person.id !== id)
                        setPersons(filteredPersons)
                        setFilterValue("")
                    })
                    // trying to delete a contact which does not exist in the database
                    .catch((error) => {
                        setMessageType('error')
                        setMessage(`Contact '${person.name}' has already been removed from the server!`)
                        console.log(messageType, ": ", message)
                        setTimeout(() => {
                            setMessage(null)
                        }, 2000)
                        resetForm()
                        // alert(`'${person.name}' has already been removed from the phonebook!`)
                        const filteredPersons = persons.filter((person) => person.id !== id)
                        setPersons(filteredPersons)
                        setFilterValue("")
                    })
        }
    }
    
    return (
        <div>
            <Title title = "Phonebook" />
            <Notification type = {messageType} message = {message} />
            <Filter value = {filterValue} handleFilterChange = {handleFilterChange}/>
            <Header header = "Add new contact"/>
            <InputForm handleSubmit = {handleSubmit}
                       newName = {newName}
                       handleNameChange = {handleNameChange}
                       newNumber = {newNumber}
                       handleNumberChange = {handleNumberChange} />
            <Header header = "Contacts" />
            <Persons filterValue = {filterValue}
                     filteredPersons = {filteredPersons}
                     persons = {persons}
                     deletePerson = {deletePerson} />
        </div>
    )
}
  
export default App