import React ,{useState, useEffect}from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
 import {GrNote} from 'react-icons/gr'
function ResultPage() {
  const [data, setData] = useState([]) 
  const [error, setError] = useState([])
const searchId = useLocation().pathname.split("/")[2]
console.log(searchId)
  useEffect(()=> {
    const fetchData = async ()=> {
     await axios.get(`http://localhost:8800/api/students/${searchId}`).then((response)=> {
        setData(response.data)
        console.log(response.data)
      }).catch((err)=> {
        setError(err.response.data)
        console.log(err.response.data)
      })
    
    }
    fetchData()
     },[]) 
  return (
    <div className="resutl">
      <span className="wow">Kasmal University</span>
      <div className="container">
        <div className="left">
          <div className="imge">
            <img
              
              src={data?.imageUrl
              }
              alt=""
            />
          </div>
          <span className="name">{data?.name}</span>
          <hr />
          <div className="items">
            <div className="item">
              <span className="title">Student ID:</span>
              <span  className="desc">{data?.studentID}</span>
            </div>
            <div className="item">
              <span  className="title">Fucalty</span>
              <span  className="desc">{data?.faculty}</span>
            </div>
            <div className="item">
              <span  className="title">Department</span>
              <span  className="desc">{data?.department}</span>
            </div>
          </div>
        </div>
        <div className="rihgt">
          <div className="info">
            <div className="genral">
              <GrNote/>
              General Information
              </div>
           <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid lightgray' ,margin:'15px 0px',padding: '0px 10px', marginTop: 20}}>
            <span style={{fontSize: 18,}}>ID</span>
            {/* <span>:</span> */}
            <span>{data.studentID}</span>
           </div>
           <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid lightgray' ,margin:'15px 0px',padding: '0px 10px', marginTop: 20}}>
            <span style={{fontSize: 18,}}>Academic Year</span>
            {/* <span>:</span> */}
            <span>{data.acadmeicyear}</span>
           </div>
           <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid lightgray' ,margin:'15px 0px',padding: '0px 10px', marginTop: 20}}>
            <span style={{fontSize: 18,}}>Sex</span>
            {/* <span>:</span> */}
            <span>{data.sex}</span>
           </div>
           <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid lightgray' ,margin:'15px 0px',padding: '0px 10px', marginTop: 20}}>
            <span style={{fontSize: 18,}}>Percentage</span>
            {/* <span>:</span> */}
            <span>{data.pracentage}</span>
           </div>
           <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid lightgray', margin:'15px 0px',padding: '0px 10px', marginTop: 20}}>
            <span style={{fontSize: 18,}}>Grade</span>
            {/* <span>:</span> */}
            <span>{data.grade}</span>
           </div>
           <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid lightgray' ,margin:'15px 0px',padding: '0px 10px', marginTop: 20}}>
            <span style={{fontSize: 18,}}>Religion</span>
            {/* <span>:</span> */}
            <span>{data.religion}</span>
           </div>
            {/* <div className="userInof">
              <div className="oneUser">
                <span className="g">ID</span>
                <span className="co" >:</span>
                  <span className="i">{data?.studentID}</span>
              </div>
              <div className="oneUser">
                <span className="g">Academic Yare</span>
                <span className="co" >:</span>
                  <span className="i">{data?.acadmeicyear}</span>
              </div>
              <div className="oneUser">
                <span className="g">Sex</span>
                <span className="co" >:</span>
                  <span className="i">{data?.sex}</span>
              </div>
              <div className="oneUser">
                <span className="g">Presantage</span>
                <span className="co" >:</span>
                  <span className="i">{data?.pracentage}</span>
              </div>
              <div className="oneUser">
                <span className="g">Grade</span>
                <span className="co" >:</span>
                  <span className="i">{data?.grade}</span>
              </div>
            </div> */}
           
          </div>

          <div className="bottomInfo">
    <div>
          <GrNote/>
              <span>Appreciation Statements</span>
            </div>
            <hr />
            <span>
              <span style={{fontSize: 20, color: 'royalblue'}}>Mogadishu University</span> Congratulates Student <span style={{color : 'royalblue', fontSize: 18}}>{data?.name}</span> ,
              For the successful graduation on academic year: 2012-2016 . She/He
              has been known since her/his joining to the University with
              courageous, polite, considerate, dynamic, reliable and friendly
              with other colleagues.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
