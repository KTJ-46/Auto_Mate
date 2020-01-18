import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import SearchDiagnostics from "../components/SearchDiagnostics";


class RepairDiagnostic extends Component {
  constructor() {
    super()
    this.state = {
      vin: "",
      mileage: "",
      dtc: "",
      diagnosis: [],
      error: "",
      message: ""
    }
  }
        

        //function to take value of what enter in the text field for each input
        handleInputChange = e => {
          const {name, value} = e.target;
          this.setState({ [name]: value })
          }
        handleFormSubmit = event => {
          event.preventDefault();
          console.log(this.state.vin)
          // once it clicks it connects to the google book api with the search value
          API.getCarMD(this.state.vin, this.state.mileage, this.state.dtc)
              .then(res => {
                  if (res.data.items === "error") {
                      throw new Error(res.data.items);
                  }
                  else {
                      // store response in a array
                      let results = res.data
                      //console log the results
                      console.log(results);
                      //map through the array 
                      results = results.map(result => {
                          //store data/information in a new object 
                          result = {
                              key: result.id,
                              id: result.id,
                              desc: result.data.desc,
                              repairHours: result.data.repair.hours,
                              repairLaborRate: result.data.repair.labor_rate_per_hour,
                              repairPartCost: result.data.repair.part_cost,
                              repairLaborCost: result.data.repair.labor_cost,
                              repairMiscCost: result.data.repair.misc_cost,
                              repairTotalCost: result.data.repair.total_cost,
                              reparTSB: result.data.tsb.file_url

                            
                          }
                          return result;
                      })
                      // reset the sate of the empty books array to the new arrays of objects with properties geting back from the response
                      this.setState({ books: results, error: "" })
                  }
              })
              .catch(err => this.setState({ error: err.items }));
      }
  
    render() {
      console.log(this.state)
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
              <Col size="md-2">
              
          <Container fluid>
                <Jumbotron>
                    <h1 className="text-white">Search for your car's diagnosis</h1>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="24">
                            <SearchDiagnostics
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>
                <br></br>
                {/* <Container>
                    <SearchResult books={this.state.books} handleSavedButton={this.handleSavedButton} />
                </Container> */}
            </Container>
            </Col>
            </Row>
          </Container>
        );
      }
    }
  }
  
  export default RepairDiagnostic;