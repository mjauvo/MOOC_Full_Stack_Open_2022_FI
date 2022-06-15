const Title = ({title}) => {
    return <h1>{title}</h1>
}
  
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

const Courses = ({courses}) => {
    return (
        <>
            {courses.map(course =>
                <Course key = {course.id} course={course} />
            )}
        </>
    )
}

const App = () => {
    const courses = [
        {
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
                },
                {
                name: 'Redux',
                exercises: 11,
                id: 4
                }
            ]
        }, 
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                name: 'Routing',
                exercises: 3,
                id: 1
                },
                {
                name: 'Middlewares',
                exercises: 7,
                id: 2
                }
            ]
        }
    ]
      
    return (
        <div>
            <Title title="Web Development - Course curriculum" />
            <Courses courses = {courses} />
        </div>
    )
}

export default App