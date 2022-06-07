import { useState } from 'react'

const Title = ({title}) => (
    <h1>{title}</h1>
)
  
const Button = ({handleClick, label}) => (
    <button onClick={handleClick}>{label}</button>
)
  
const StatisticLine = ({stat, value}) => {
    return (
        <>
            <tr>
                <td>{stat}</td><td>{value}</td>
            </tr>
        </>
    )
}
  
const Statistics = ({good, neutral, bad}) => {
    console.log({good, neutral, bad})
  
    const total = good + neutral + bad
    const average = (good - bad) / total
    const positive = 100 * good / total
  
    if (total > 0) {
        return (
            <>
                <table>
                    <tbody>
                        <StatisticLine stat = "Good"         value = {good} />
                        <StatisticLine stat = "Neutral"      value = {neutral} />
                        <StatisticLine stat = "Bad"          value = {bad} />
                        <StatisticLine stat = "Total"        value = {total} />
                        <StatisticLine stat = "Average"      value = {average} />
                        <StatisticLine stat = "Positive (%)" value = {positive} />
                    </tbody>
                </table>
            </>
        )
    }
    else {
        return (
            <p>No feedback given</p>
        )
    }
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