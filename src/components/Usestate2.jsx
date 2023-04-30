import React, { useState } from 'react'

function Usestate2() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    // for tile change
    document.title = count

    const increamentFive = () => {

        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <>
            <p>count {count}</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>increament</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>decreament</button>
            <button onClick={() => setCount(initialCount)}>reset</button>
            <button onClick={increamentFive}>+5</button>

        </>
    )
}

export default Usestate2
