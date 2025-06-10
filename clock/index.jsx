import React,{useState, useEffect} from "react";

function App(){



const [time, setTime] = useState(new Date())

useEffect(()=>{
    const intervalId = setInterval(()=>{
        setTime(new Date())
    }, 1000)

    return () => {
        clearInterval(intervalId)
    }
}, [])

function formatTime(){
    let hour = time.getHours()
    let minute = time.getMinutes()
    let seconds = time.getSeconds()
    const meridiem = hour >= 12 ? 'PM' : 'AM'

    hour = hour % 12 || 12;

    return `${padZero(hour)}:${padZero(minute)}:${padZero(seconds)} ${meridiem}`;
}
 
function padZero(number){
    return (number < 10 ? '0' : '') + number
}

    return (
        <>
            <div className="clock-container container bg-light text-dark rounded text-center">
                <div className="clock border text-bg-info rounded">
                    <span className="">{formatTime()}</span>
                </div>
            </div>
        
        </>
    )
}
export default App;