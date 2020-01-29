import React, {Component } from "react";
import { Button, Form} from "react-bootstrap";
import { Col, Row, Container } from "../Grid";
import users from "../../data/users";
import "./style.css";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

onChange = e => {
    this.setState({
      [e.target.type]: e.target.value
    });  
};

  handleSubmit = async (e) => {

    e.preventDefault();
    
    const exists = users.find(user=> {
        return user.email.toLowerCase() === this.state.email.toLowerCase() && user.password === this.state.password;
    })
   
    if (exists) {
      localStorage.setItem("token","isLoggedIn");
      window.location = "/Home"; 
        }
      else {alert("Please check your Login Credentials & try again!")}


    };

  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-6">
        <Form onSubmit={this.handleSubmit}>
            <br></br>
            <br></br>
        <Form.Group controlId="formBasicEmail">
            <Form.Label className="text-light">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" 
            onChange={e => this.onChange(e)}
            value={this.state.email}
            />
        
        </Form.Group>
            <br></br>
        <Form.Group controlId="formBasicPassword">
            <Form.Label className="text-light">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" 
            onChange={e => this.onChange(e)}
            value={this.state.password}
            />
        </Form.Group>
            <br></br>
        <Button className="btn btn-info btn-block font-weight-bold" variant="primary" type="submit">
            Submit
        </Button>
        </Form>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
        </Col>
        <Col size="md-6">
            <br></br>
            <br></br>
            <br></br>
            <h3 style={{padding: 20, height: 100, backgroundColor: "#343a40", fontFamily: "calibri italic"}} className="Text text-light text-center border border-light">To avail services of Auto-Mate Inc. please contact us at following-</h3>

            <h3 style={{padding: 30, height: 130, backgroundColor: "#343a40", fontFamily: "calibri italic"}} className="Text text-light text-center border border-light">Contact Help-Desk: +1 931-252-5501 <br></br>
              Email: contact@automate.com
            </h3>

        </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;