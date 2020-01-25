import React from "react";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
function Nav() {
  return (
  function ActionLink() {
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
  },
 
    <nav className="navbar bg-info">
      <h2>
        Auto-Mate
      </h2>
   
 
 
      <ButtonToolbar>
  <button  onClick={handleClick}  variant ="primary">Log Out</button>
      </ButtonToolbar>
    
      
      </nav>
     );

//   <button onClick={activateLasers}>
//   Activate Lasers
// </button>
}

export default Nav;
