import { useState } from 'react'

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
  
    // For the purpose of filter testing
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
  
    //const [persons, setPersons] = useState([])
    const [newName, setNewName ] = useState("")
    const [newNumber, setNewNumber ] = useState("")
  
    const [filteredPersons, setFilteredPersons ] = useState([])
    const [filterValue, setfilterValue ] = useState("")
    
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
