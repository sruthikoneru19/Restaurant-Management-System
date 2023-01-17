import { Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css'


function AddEmployee(){
    const [mid,setid] = useState('');
    const [mname,setname] = useState('');
    const [mage,setage] = useState('');
    const [mgender,setgender] = useState('');
    const [mjob,setjob] = useState('');
    const [msalary,setsalary] = useState('');
    const [mphoneno,setphoneno] = useState('');
    
    
    const addEmployee = () =>{
    let data = {
        id: mid,
        name: mname,
        age: mage,
        gender: mgender,
        job: mjob,
        salary: msalary,
        phoneno: mphoneno
        
   }
    fetch(`http://localhost:8091/api/v1/addEmployee`,{
    method:"POST",
    body: JSON.stringify(data),
    headers : {
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*"
    }
   }).then(response => response.json())
     .then(json => console.log(json));
     alert("Employee Added Successfully !!! ")
    }


    //const AddItem =() => {
        return(
            <div id="signup-div">
                <h1> Add Employee </h1>
                Employee Id: <input type= "number" onChange={ (e) => setid(e.target.value)}/><br/> <br/>
                Employee Name: <input type="text" onChange={ (e) => setname(e.target.value)}/><br/> <br/>
                Employee Age: <input type="number" onChange={ (e) => setage(e.target.value)}/> <br/><br/>
                Employee Gender: <input type="text" onChange={ (e) => setgender(e.target.value)}/><br/><br/>
                Employee Job: <input type="text" onChange={ (e) => setjob(e.target.value)}/><br/> <br/>
                Employee Salary: <input type="number" onChange={ (e) => setsalary(e.target.value)}/><br/> <br/>
                Employee Phoneno: <input type="number" onChange={ (e) => setphoneno(e.target.value)}/> <br/><br/>
                
                <button onClick={addEmployee}> ADD </button><br/><br/>
                <Link to="/employees"> Back to Employees </Link><br/>
                <Link to="/home"> Home </Link>
            </div>
        )
}
export default AddEmployee