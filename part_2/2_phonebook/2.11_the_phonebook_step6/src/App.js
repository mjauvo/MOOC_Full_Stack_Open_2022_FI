import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import Persons from './components/Persons'
import InputForm from './components/InputForm'

const Title = ({title}) => {
    return (
        <h1>{title}</h1>
    )
}

const Header = ({header}) => {
    return (
        <h2>{header}</h2>
    )
}
  
const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName ] = useState("")
    const [newNumber, setNewNumber ] = useState("")

    const [filteredPersons, setFilteredPersons ] = useState([])
    const [filterValue, setfilterValue ] = useState("")

    useEffect(() => {
        console.log('effect')
        axios
          .get('http://localhost:3001/persons')
          .then(response => {
            console.log('promise fulfilled')
            setPersons(response.data)
        })
    }, [])
    console.log('render', persons.length, 'persons')
  
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

    const handleAddNew = (event) => {
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
            setPersons(persons.concat(personObject));
        }
        setNewName("")
        setNewNumber("")
    }
  
    return (
        <div>
            <Title title = "Phonebook" />
            <Filter value = {filterValue} handleFilterChange = {handleFilterChange}/>
            <Header header = "Add new contact"/>
            <InputForm handleAddNew = {handleAddNew}
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