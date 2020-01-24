import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Slider from "../components/Slider";


class Home extends Component {

 
    render() {
      if(!localStorage.getItem("token")) {
        return <Redirect to="/"/>
      } else {
      return (
        <Container fluid>
          <Row>
          <Col size="md-2">
            <div className="sidebarMenu">
            <br></br>
            <br></br> 
            <a href="/home" className="btn btn-secondary btn-block font-weight-bold active" role="button">Home</a>
            <br></br>
            <br></br>
            <a href="/repair" className="btn btn-secondary btn-block font-weight-bold" role="button">Repair/Diagnostic</a>
            <br></br>
            <br></br>
            <a href="/logbook" className="btn btn-secondary btn-block font-weight-bold" role="button">Logbook</a>
            <br></br>
            <br></br>
            <a href="/maintenance" className="btn btn-secondary btn-block font-weight-bold" role="button">Maintenance</a>  
             </div> 
            </Col>
            <Col size="md-10">
              <Slider/>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}
  
  export default Home;