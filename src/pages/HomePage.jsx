import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

function HomePage() {
 const [data, setData] = useState([]) 
 const [searchId, setSearchId] = useState(null) 
 const [error, setError] = useState(null)
 const navigation = useNavigate()

 const handleClick =(e)=> {
  e.preventDefault()
if(searchId == data.studentID){
 navigation(`/verify/${data.studentID}`)
}
 }

 console.log(searchId)
 useEffect(()=> {
const fetchData = async ()=> {
 await axios.get(`http://localhost:8800/api/students/${searchId}`).then((response)=> {
    setData(response.data)
    console.log(response.data)
  }).catch((err)=> {
    setError(err.response.data)

  })

}
fetchData()
 },[searchId])

  return (
    <div className='home'>
        <span>Kasmal</span>
        {error && <span style={{fontSize: 18, color: 'red'}}>{error}</span>}  
        <form  onSubmit={handleClick}>
            <input type="text"  placeholder='Search Student ID'  onChange={(e)=> setSearchId(e.target.value)}/>
            <button>Search</button>
        </form>
    </div>
  )
}

export default HomePage