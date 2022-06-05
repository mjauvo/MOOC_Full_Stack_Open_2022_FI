import { useState } from 'react'

const Title = ({name}) => {
    return (
        <>
            <h1>{name}</h1>
        </>
    )
}
  
const Button = ({handleClick, label}) => (
    <button onClick={handleClick}>{label}</button>
)
  
const StatisticLine = ({text, value}) => {
    return (
        <>
            {text}: {value}<br/>
        </>
    )
}
  
const Statistics = ({good, neutral, bad}) => {
    console.log({good, neutral, bad})
  
    const all = good + neutral + bad
    const average = (good - bad) / all
    const positive = 100 * good / all
  
    if (all > 0) {
        return (
            <div>
                <StatisticLine text="Good" value={good} />
                <StatisticLine text="Neutral" value={neutral} />
                <StatisticLine text="Bad" value={bad} />
                <StatisticLine text="All" value={all} />
                <StatisticLine text="Average" value={average} />
                <StatisticLine text="Positive (%)" value={positive} />
            </div>
        )
    }
    else {
        return (
            <p>No feedback given</p>
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
            <Title name="Give Feedback"/>
            <Button handleClick={handleGood} label="GOOD" />
            <Button handleClick={handleNeutral} label="NEUTRAL" />
            <Button handleClick={handleBad} label="BAD" />
    
            <Title name="Statistics"/>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}
  
export default App