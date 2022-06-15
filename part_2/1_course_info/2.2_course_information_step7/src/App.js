const Header = ({header}) => {
    return <h1>{header}</h1>
}
  
const Part = ({name, exercises}) => {
    //console.log("component Part:")
    console.log(name, exercises)
    return (
        <p>{name} {exercises}</p>
    )
}

const Total = ({parts}) => {
    //console.log("component Total:")
    return (
            <p><strong>Total of {parts[0].exercises +
                                 parts[1].exercises +
                                 parts[2].exercises} exercises</strong></p>
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

const Course = ({course}) => {
    return (
        <>
            <Header  header = {course.name} />
            <Content parts  = {course.parts} />
            <Total   parts  = {course.parts}></Total>
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