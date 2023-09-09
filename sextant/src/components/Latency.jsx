import React, { useState } from "react";

export default function Latency(){
    const[latency,setLatency] =useState(null)
    const date=Date.now()
    const socket = new WebSocket('ws://localhost:55450');
    console.log(socket)
    socket.onopen = (event) => {
        console.log('WebSocket connection opened:', event);
      
        // Send data to the server after the connection is established
        socket.send('Hello, WebSocket server!');
      };
    socket.onmessage=((e)=>{
        let time=Date.now()-e.data
        setLatency(time)
    })
    console.log(date)
    return(
        <p>{latency}</p> 
    )
}