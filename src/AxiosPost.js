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

    function handleUpdate(e){
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1",inputData)
        .then((respone)=>{
            console.log(respone)
        })
    }

    function handleDelete(e){
        e.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/users/1")
        .then((response)=>{
            
        })

    }

    

  return (
    <>
      <label>First Name:</label><br/>
      <input type='text' name='fname' value={inputData.fname} onChange={handleData} /><br></br>
      <lable>Last Name:</lable>
      <input type= "text" name ="lname" value={inputData.lname} onChange={handleData} />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>


    </>
  )
}

export default AxiosPost
