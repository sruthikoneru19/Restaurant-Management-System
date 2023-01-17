import { useEffect, React, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './App.css'

function Employees(){
    const [employees,setEmployees] = useState([]);
    const url = `http://localhost:8091/api/v1/getAllEmployees`;
    
    const deleteemployee= (id) =>{
      const url =`http://localhost:8091/api/v1/employee/${id}`;
      axios.delete(url).then(() =>{
        alert('Employee is deleted')
        axios.get(`http://localhost:8091/api/v1`).then( res => { setEmployees(res.data)})
      })
    }
    
    useEffect ( () =>{
      axios.get(url).then( res => {
        //console.log(res.data);
        setEmployees(res.data);
      })
    }, []);

    return(
      <div className="employee-list">
        <h1> Employees List</h1>
        
        <ul>
            
              <li> ID </li>
              <li> Name </li>
              <li> Age </li>
              <li> Gender </li>
              <li> Job </li>
              <li> Salary </li>
              <li> Phoneno </li>
              
              <li> Delete</li>
            </ul>
            {employees.length>0 ? employees.map (m => 
                            <ul key={m.id}>
                            <li>{m.id}</li>
                            <li>{m.name}</li>
                            <li>{m.age}</li>
                            <li>{m.gender}</li>
                            <li>{m.job}</li>
                            <li>{m.salary}</li>
                            <li>{m.phoneno}</li>
                            <li><button onClick={()=>deleteemployee(m.id)}> Delete</button></li>
                            </ul>
                            ): <h2 >No Result Found</h2>
                          }
                            <Link id="link" to="/addemployee">  Add Employee </Link><br/>
                            <Link id="link" to="/home"> Home </Link>
                            
        
        </div>
    )
}
export default Employees