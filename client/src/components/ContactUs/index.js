import React, {Component} from "react";
import emailjs from "emailjs-com";
import './style.css';


class ContactUs extends Component {

constructor(props){
  super()
  this.state= {
    user_name : "",
    user_email : "",
  }
  }

  handleChange = (e) => {
    const {name, value} =e.target
    this.setState({[name]:value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { user_name, user_email} = this.state;
    let result = this.props.diagnostics[0];
    let templateParams = {
      to_name: user_name,
      to_email: user_email,
      desc: result.desc,
      repairHours: result.repairHours || 'tbd',
      repairLaborRate: result.repairLaborRate,
      repairPartCost: result.repairPartCost,
      repairLaborCost: result. repairLaborCost,
      repairMiscCost: result.repairMiscCost,
      repairTotalCost: result.repairTotalCost,
     }
     console.log('template here', templateParams)
    emailjs.send('automate_gmail', 'automate_quote', templateParams, 'user_DoxoMt5Go2TzXNORV56Z5').then((result) => {
      console.log(result.text);
      }, (error) => {
      console.log(error.text);
      });
      
    this.setState({
      user_name : "",
      user_email : ""})
  }
  render () { 
  return (
    <form className="contact-form" onSubmit={this.handleSubmit}>
      <label style={{marginLeft: 10, marginRight: 10}}>Name:</label>
      <input type="text" onChange= {this.handleChange} value= {this.state.user_name} name="user_name" />
      <label style={{marginLeft: 10, marginRight: 10}}>Email:</label>
      <input type="email" onChange= {this.handleChange}  value= {this.state.user_email} name="user_email" />
      <br></br>
      
      <input style={{width: 430, marginLeft: 65}} class="btn btn-info font-weight-bold" type="submit" value="Send Quote" />
    </form>
  );
  }
}

export default ContactUs