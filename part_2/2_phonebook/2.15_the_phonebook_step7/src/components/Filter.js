const Filter = ({value, handleFilterChange}) => {
    return (
        <>
            Filter shown with<br/><input value = {value} onChange = {handleFilterChange}/>
        </>
    )
}

export default Filter