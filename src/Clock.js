import React, { useState, useEffect } from 'react'

const Clock = (props) => {
    const  [ date, setDate ] = useState(new Date())
    console.log(date)
    useEffect(() => {
        console.log("Component is mounted")
        const interval = setInterval(() => {
            console.log("interval")
            setDate(new Date())
        }, 1000)

        console.log(interval)

        return () => {
            console.log("I am unmouted")
            clearInterval(interval)
        }
    }, [])
    return(
        <h1>{date.toLocaleTimeString()}</h1>
    )
}

export default Clock

// 1 - We want a state for the time
// 2 - We want to start the time,
// when the components is mounted
// 3- When the component is unmountend,
// it stops the timer


// -
// Change the value of the state, with the current time, every seconds