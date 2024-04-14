import React, {useState} from 'react'

const App = () => {
    const [count, setCount] = useState(0);
    console.log(count)
    console.log(setCount)

    const incrementValue = () => {
        setCount(count + 1)
    }
    const decrementValue = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incrementValue}>+</button>
            <button onClick={decrementValue}>-</button>
        </div>
    )
}

export default App
