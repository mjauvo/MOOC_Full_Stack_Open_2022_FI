import { useState } from 'react'

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

const Filter = ({value, handleFilterChange}) => {
    return (
        <div>
            Filter shown with<br/><input value = {value} onChange = {handleFilterChange}/>
        </div>
    )
}

const Person = ({person}) => {
    return (
        <p>{person.name}: {person.number}</p>
    )
}
  
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
  
const InputForm = ({handleAddNew, newName, handleNameChange, newNumber, handleNumberChange}) => {
    return (
        <form onSubmit = {handleAddNew}>
            <div>Name:<br/><input value = {newName} onChange = {handleNameChange}/></div>
            <div>Number:<br/><input value = {newNumber} onChange = {handleNumberChange}/></div>
            <div><button type = "submit">Add</button></div>
        </form>
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
  
    //const [ persons, setPersons] = useState([])
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
