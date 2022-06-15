  
const Header = ({header}) => {
    return <h2>{header}</h2>
}

const Part = ({name, exercises}) => {
    return (
        <p>{name} {exercises}</p>
    )
}

const Content = ({parts}) => {
    return (
        <>
            {parts.map(part =>
                <Part key = {part.id} name = {part.name} exercises = {part.exercises} />
            )}
        </>
    )
}

const Total = ({parts}) => {
    const init = 0;
    const totalExercises = parts.reduce((sum, currValue) => sum + currValue.exercises, init)

    return (
            <p><strong>Total of {totalExercises} exercises</strong></p>
    )
}

const Course = ({course}) => {
    return (
        <>
            <Header  header = {course.name} />
            <Content parts  = {course.parts} />
            <Total   parts  = {course.parts} />
        </>
    )
}

export default Course