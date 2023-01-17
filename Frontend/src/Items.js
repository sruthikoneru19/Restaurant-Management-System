import { useEffect, React, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './App.css'

function Items(){
    const [items,setItems] = useState([]);
    const url = `http://localhost:8092/api/v2/listAllItems`;
    
    const deleteitem= (id) =>{
      const url =`http://localhost:8092/api/v2/itemDelete/${id}`;
      axios.delete(url).then(() =>{
        alert('Item is deleted')
        axios.get(`http://localhost:8092/api/v2`).then( res => { setItems(res.data)})
      })
    }

   
      
    
    useEffect ( () =>{
      axios.get(url).then( res => {
        //console.log(res.data);
        setItems(res.data);
      })
    }, []);

    return(
      <div className="item-list">
        <h1> Items List</h1>
        
        
        <ul>
            
              <li> ID </li>
              <li> Name </li>
              <li> Price </li>
              <li> Quantity </li>
              <li> Update </li>
              <li> Delete</li>
            </ul>
            {items.length>0 ? items.map (i => 
                            <ul key={i.id}>
                            <li>{i.id}</li>
                            <li>{i.item_name}</li>
                            <li>{i.price}</li>
                            <li>{i.quantity}</li>
                            <li><Link to={"/update"}>Update</Link></li>
                            <li><button onClick={()=>deleteitem(i.id)}> Delete</button></li><br></br>
                            </ul>
                            ): <h2 >No Result Found</h2>
                          }
                    
                            <br></br><Link id="link" to="/additem">  Add Item </Link><br/>
                            <Link id="link" to="/home"> Home </Link>
        
        </div>
    )
}
export default Items

