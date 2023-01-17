import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import'./App.css';

function Home(){
    
    return(
        <div id="home">
        
            <li> <Link to="/items">Items</Link> </li><br></br>
            <li> <Link to="/employees"> Employees</Link></li><br></br>
            <li> <Link to="/login"> Logout </Link></li>      
                    
        </div>

        
    )
}
export default Home