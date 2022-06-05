const Header = (props) => {
    return <h1>{props.course}</h1>
}

const Part = (props) => {
    return (
        <>
            <p>{props.name} {props.count}</p>
        </>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part name={props.name1} count={props.count1} />
            <Part name={props.name2} count={props.count2} />
            <Part name={props.name3} count={props.count3} />
        </div>
    )
}
    
const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.total}</p>
        </div>
    )
}
  
const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header course = {course} />
            <Content  name1 = {part1} count1 = {exercises1}
                      name2 = {part2} count2 = {exercises2}
                      name3 = {part3} count3 = {exercises3}/>
            <Total total = {exercises1 + exercises2 + exercises3}/>
        </div>
    )
}

export default App