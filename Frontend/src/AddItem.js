import { Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css'

function AddItem(){
    const [iid,setid] = useState('');
    const [iname,setname] = useState('');
    const [iqty,setqty] = useState('');
    const [iprice,setprice] = useState('');
    
    const addItem = () =>{
    let data = {
        id: iid,
        item_name: iname,
        price: iprice,
        quantity: iqty,
        
   }
    fetch(`http://localhost:8092/api/v2/addItem`,{
    method:"POST",
    body: JSON.stringify(data),
    headers : {
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*"
    }
   }).then(response => response.json())
     .then(json => console.log(json));
     alert("Item Added Successfully !!! ")
    }


    //const AddItem =() => {
    return(
        <div id="signup-div">
            <h1> Add Item </h1>
            Item Id <input type="number" onChange={ (e) => setid(e.target.value)}/> <br/><br/>
            Item Name: <input type="text" onChange={ (e) => setname(e.target.value)}/> <br/><br/>
            Item Price: <input type="number" onChange={ (e) => setprice(e.target.value)}/> <br/><br/>
            Item Quantity: <input type="text" onChange={ (e) => setqty(e.target.value)}/> <br/><br/>
            <button onClick={addItem}> ADD </button><br/><br/>
            <Link to="/items"> Back to Items </Link><br/>
            <Link to="/home"> Home </Link>
        </div>
    )
    }

export default AddItem