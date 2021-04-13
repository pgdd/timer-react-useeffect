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
        // It is an id, we need to keep this id
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
