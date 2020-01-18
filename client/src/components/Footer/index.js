import React from "react";

function Footer() {
  return (
    <div className="footer-bottom m-0 p-0">
        <div className="bg-info p-4">
            <div className="nav justify-content-center bg-info" >
              
			        <span aria-hidden="true" className="rounded-circle bg-secondary" style={{height: 30, width: 30, paddingLeft: 10, paddingTop: 2}}>
                <a href="https://www.facebook.com/Automate-101028531450259/?modal=admin_todo_tour" target="_blank" aria-label="Facebook">  
                  <span className="fa fa-facebook"></span>           
		            </a>
              </span>

              <span className="rounded-circle bg-secondary" style={{height: 30, width: 30, paddingLeft: 8, paddingTop: 2, marginLeft: 20}}>
                <a target="_blank" href="https://twitter.com/AutoMat36436668" aria-label="Twitter">
			            <span className="fa fa-twitter"></span>
		            </a>
              </span>

              <span className="rounded-circle bg-secondary" style={{height: 30, width: 30, paddingLeft: 8, paddingTop: 2, marginLeft: 20}}>
                <a href="https://www.instagram.com/automatelog/" target="_blank" aria-label="Instagram">
	                <span className="fa fa-instagram"></span> 
		            </a>          
              </span>
           
            </div>
        </div>
    </div>
  );
}

export default Footer;