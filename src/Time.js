import { useEffect, useState } from "react"

function Time(){
    
    const [time,setTime] = useState(60)

    useEffect(()=>{
        setTimeout(()=>{
            setTime(time-1)
        },1000)
    },[time])

    return(
        <div id="time">
            {time}
        </div>
    )
}

export default Time