import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link, Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import EditBtn from "../components/EditBtn";


class RepairDiagnostic extends Component {

 
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
              <a href="/home" class="btn btn-secondary btn-block font-weight-bold" role="button">Home</a>
              <br></br>
              <br></br>  
              <a href="/search" class="btn btn-secondary btn-block font-weight-bold" role="button">Search</a>
              <br></br>
              <br></br>
              <a href="/repair" class="btn btn-secondary btn-block font-weight-bold active" role="button">Repair/Diagnostic</a>
              <br></br>
              <br></br>
              <a href="/tsb" class="btn btn-secondary btn-block font-weight-bold" role="button">TSB</a>
              <br></br>
              <br></br>
              <a href="/logbook" class="btn btn-secondary btn-block font-weight-bold" role="button">Logbook</a>
              <br></br>
              <br></br>
              <a href="/maintenance" class="btn btn-secondary btn-block font-weight-bold" role="button">Maintenance</a> 
              </div> 
              </Col>
            </Row>
          </Container>
        );
      }
    }
  }
  
  export default RepairDiagnostic;