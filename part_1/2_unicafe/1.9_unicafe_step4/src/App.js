import { useState } from 'react'

const Title = ({name}) => {
    return (
        <>
            <h1>{name}</h1>
        </>
    )
}

const Button = ({behavior, value}) => {
    return (
        <>
            <button onClick={behavior}>{value}</button>
        </>
    )
}

const Result = ({name, value}) => {
    return (
        <>
            {name}: {value}<br/>
        </>
    )
}

const Statistics = ({good, neutral, bad}) => {
    //console.log({good, neutral, bad})
  
    const total = good + neutral + bad
    const average = (good - bad) / total
    const positive = 100 * good / total

    if (total > 0) {
        return (
            <>
                <Result name = "Good" value={good} />
                <Result name = "Neutral" value={neutral} />
                <Result name = "Bad" value={bad} />
                <Result name = "Total" value={total} />
                <Result name = "Average" value={average} />
                <Result name = "Positive (%)" value={positive} />
            </>
        )
    }
    else {
        return (
            <p>No feedback fiven</p>
        )
    }
}
  
const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
  
    const handleGood = () => setGood(good+1)
    const handleNeutral = () => setNeutral(neutral+1)
    const handleBad = () => setBad(bad+1)
  
    return (
        <div>
            <Title name = "Give Feedback"/>
            <Button behavior = {handleGood} value="GOOD" />
            <Button behavior = {handleNeutral} value="NEUTRAL" />
            <Button behavior = {handleBad} value="BAD" />

            <Title name = "Statistics"/>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App