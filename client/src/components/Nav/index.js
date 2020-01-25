import React from "react";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
function Nav() {
  return (
  function LogOut() {
    function handleClick(e) {
      e.preventDefault();
      console.log('The button was clicked.');
    }
  },
 
    <nav className="navbar bg-info">
      <h2>
        Auto-Mate
      </h2>
   
 
 
      <ButtonToolbar>
  <button  onClick={LogOut}  variant ="primary">Log Out</button>
      </ButtonToolbar>
    
      
      </nav>
     );

//   <button onClick={activateLasers}>
//   Activate Lasers
// </button>
}

export default Nav;
