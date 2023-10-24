import axios from 'axios'
import React,{useState} from 'react'

const AxiosPost = () => {
    const data = {
        fname:"",
        lname:""
    }
    const [inputData,setInputData]=useState(data)

    function handleData(e){
        setInputData({...inputData,[e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users",inputData)
        .then((response)=>{
            console.log(response)
        })
    }

    

  return (
    <>
      <label>First Name:</label><br/>
      <input type='text' name='fname' value={inputData.fname} onChange={handleData} /><br></br>
      <lable>Last Name:</lable>
      <input type= "text" name ="lname" value={inputData.lname} onChange={handleData} />
        <button onClick={handleSubmit}>Submit</button>


    </>
  )
}

export default AxiosPost
