import { useState } from 'react'

const Title = ({title}) => (
    <h1>{title}</h1>
)

const Button = ({handleClick, label}) => (
    <button onClick={handleClick}>{label}</button>
)

const Result = ({stat, value}) => {
    return (
        <>
            {stat}: {value}<br/>
        </>
    )
}

const Statistics = ({good, neutral, bad}) => {
    //console.log({good, neutral, bad})
  
    const total = good + neutral + bad
    const average = (good - bad) / total
    const positive = 100 * good / total
  
    return (
        <>
            <Result stat = "Good"         value = {good} />
            <Result stat = "Neutral"      value = {neutral} />
            <Result stat = "Bad"          value = {bad} />
            <Result stat = "Total"        value = {total} />
            <Result stat = "Average"      value = {average} />
            <Result stat = "Positive (%)" value = {positive} />
        </>
    )
}
  
const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
  
    const handleGood = () => setGood(good+1)
    const handleNeutral = () => setNeutral(neutral+1)
    const handleBad = () => setBad(bad+1)
  
    return (
        <div>
            <Title  title = "Give Feedback"/>
            <Button handleClick = {handleGood}    label = "GOOD" />
            <Button handleClick = {handleNeutral} label = "NEUTRAL" />
            <Button handleClick = {handleBad}     label = "BAD" />

            <Title  title = "Statistics"/>
            <Statistics good = {good} neutral = {neutral} bad = {bad} />
        </div>
    )
}

export default App