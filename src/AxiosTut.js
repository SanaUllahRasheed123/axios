import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'

export default function AxiosTut() {
    const [userData,setData]=useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response)
            setData(response.data)
           
            
        })
    })
  return (
    <div>

    {userData.map((data)=>{
        return(
            <div>
                <h1>{data.name}</h1>
                <h1>{data.email}</h1>
            </div>
        )
    })}
      
    </div>
  )
}
