const Filter = ({value, handleFilterChange}) => {
    return (
        <div>
            Filter shown with<br/><input value = {value} onChange = {handleFilterChange}/>
        </div>
    )
}

export default Filter