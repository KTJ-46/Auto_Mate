import { React, Component } from "react";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Button} from "react-bootstrap";
//import { Button, Input } from "antd";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { TextArea, FormBtn } from "../components/Form";
import EditBtn from "../components/EditBtn";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = async () => {
    console.log(this.state.email);
    console.log(this.state.password);
    if (this.state.email === "ktj") {
      console.log("inside");
      window.location = "/Home"; // Redirecting to other page.
      return false;
    }
  };

  //   onSubmit = async () => {
  //     const response = await this.props.mutate({
  //       variables: this.state
  //     });
  //     const { token, refreshToken } = response.data.login;
  //     localStorage.setItem("token", token);
  //     localStorage.setItem("refreshToken", refreshToken);
  //   };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-2">
            <div className="sidebarMenu">
              <br></br>
              <br></br>
                <h1> Hello World</h1>
{/*               <Input
                name="email"
                placeholder="Email"
                onChange={e => this.onChange(e)}
                value={this.state.email}
              />
              <Input
                name="password"
                placeholder="Password"
                type="password"
                onChange={e => this.onChange(e)}
                value={this.state.password}
              /> */}
              <br />
              <br></br>
              <br></br>
                <button> Click Me </button>
              <Button >
                Login
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;