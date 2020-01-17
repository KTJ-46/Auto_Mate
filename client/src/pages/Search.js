import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";


class Search extends Component {

 
    render() {
      return (
        <Container fluid>
          <Row>
          <Col size="md-2">
            <div className="sidebarMenu">
            <br></br>
            <br></br> 
            <a href="/" class="btn btn-secondary btn-block font-weight-bold" role="button">Home</a>
            <br></br>
            <br></br>  
            <a href="/search" class="btn btn-secondary btn-block font-weight-bold active" role="button">Search</a>
            <br></br>
            <br></br>
            <a href="/repair" class="btn btn-secondary btn-block font-weight-bold" role="button">Repair/Diagnostic</a>
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
  
  export default Search;