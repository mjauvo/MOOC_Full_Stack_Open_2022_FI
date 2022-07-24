const InputForm = ({handleAddNew, newName, handleNameChange, newNumber, handleNumberChange}) => {
    return (
        <form onSubmit = {handleAddNew}>
            <div>Name:<br/><input value = {newName} onChange = {handleNameChange}/></div>
            <div>Number:<br/><input value = {newNumber} onChange = {handleNumberChange}/></div>
            <div><button type = "submit">Add</button></div>
        </form>
    )
}

export default InputForm