const Header = ({header}) => {
    return <h1>{header}</h1>
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
  
const App = () => {
    const course = {
        name: 'Half Stack application development',
        id: 1,
        parts: [
            {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
            },
            {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
            },
            {
            name: 'State of a component',
            exercises: 14,
            id: 3
            }
        ]
    }
  
    return (
        <div>
            <Course course={course} />
        </div>
    )
}

export default App
