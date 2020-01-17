import React, {Component } from "react";
import { Button, Form} from "react-bootstrap";
import { Col, Row, Container } from "../components/Grid";
import users from "../data/users";


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
    // iterate through array
    // see if email is among the list
        // see if password matches email object
    const exists = users.find(user=> {
        return user.email.toLowerCase() === this.state.email.toLowerCase() && user.password === this.state.password;
    })
   
    if (exists) {
      localStorage.setItem("token","isLoggedIn");
      window.location = "/Home"; // Redirecting to other page.
      return false;
        }


    };

  render() {
    return (
      <Container fluid>
       
        <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" 
            onChange={e => this.onChange(e)}
            value={this.state.email}
            />
        
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" 
            onChange={e => this.onChange(e)}
            value={this.state.password}
            />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
      </Container>
    );
  }
}

export default Login;