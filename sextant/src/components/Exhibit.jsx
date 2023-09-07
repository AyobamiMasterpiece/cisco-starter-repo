import React from "react"

 export default function Exhibit({name,children}){
    return (
        <div>
            <h2>{name}</h2>
            {children}
        </div>
    )
}