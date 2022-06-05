const Header = (props) => {
    //console.log(props)
    return <h1>{props.course}</h1>
}

const Part = (props) => {
    //console.log(props)
    return (
        <>
            <p>{props.name} {props.count}</p>
        </>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part name={props.course1.name} count={props.course1.exercises} />
            <Part name={props.course2.name} count={props.course2.exercises} />
            <Part name={props.course3.name} count={props.course3.exercises} />
      </div>
    )
  }
      
const Total = (props) => {
    //console.log(props)
    return (
        <div>
            <p>Number of exercises {props.total}</p>
        </div>
    )
}
  
const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        <div>
            <Header course={course} />
            <Content  course1 = {part1}
                      course2 = {part2}
                      course3 = {part3} />
            <Total total={part1.exercises + part2.exercises + part3.exercises}/>
        </div>
      )
    }

export default App