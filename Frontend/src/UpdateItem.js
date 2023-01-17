import { Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css'

function UpdateItem(){
    const [iid,setiid] = useState(0);
    const [iname,setiname] = useState('');
    const [iqty,setiqty] = useState('');
    const [iprice,setiprice] = useState('');
    
    const updateItem = () =>{
    let data = {
        id:iid,
        item_name:iname,
        price: iprice,
        quantity: iqty
    }
    fetch(`http://localhost:8092/api/v2/itemUpdate/${iid}`,{
    method:"PUT",
    body: JSON.stringify(data),
    headers : {
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*"
    }
   }).then(response => response.json())
     .then(json => console.log(json));
     alert("Item Updated Successfully !!! ")
    }

    return(
        <div id="signup-div">
            <h1> Update Item </h1>
            Item ID: <input type="number" onChange={ (e) => setiid(e.target.value)}/> <br/><br/>
            Item Name: <input type="text" onChange={ (e) => setiname(e.target.value)}/> <br/><br/>
            Item Price: <input type="number" onChange={ (e) => setiprice(e.target.value)}/> <br/><br/>
            Item Quantity: <input type="text" onChange={ (e) => setiqty(e.target.value)}/> <br/><br/>
             <button onClick={updateItem}> UPDATE</button><br/><br/>
            <Link to="/home"> Home </Link>
        </div>
    )
    }

export default UpdateItem