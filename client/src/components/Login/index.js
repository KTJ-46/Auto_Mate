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
      return false;
        }


    };

  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-8 mx-auto">
        <Form className="md-6" onSubmit={this.handleSubmit}>
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
        </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;