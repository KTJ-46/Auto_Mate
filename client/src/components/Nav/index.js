import React from "react";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
function Nav() {


  function handleClick(e) {
    e.preventDefault();
    
    localStorage.setItem("token","");
      window.location = "/"; 
      console.log('The button was clicked.');
    }
  
  return (
  
    
  
 
    <nav className="navbar bg-info">
      <h2 >
        Auto-Mate
      </h2>
   
 
 
      {localStorage.getItem("token") && localStorage.getItem("token")!=="" &&<ButtonToolbar>
  <button onClick={handleClick}  className="LogOut btn btn-info btn-block font-weight-bold" variant ="primary">Log Out</button>
      </ButtonToolbar>}
    
      
      </nav>
     );



}

export default Nav;
