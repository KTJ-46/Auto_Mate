import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import SearchDiagnostics from "../components/SearchDiagnostics";
import DiagnosticsResult from "../components/DiagnosticsResult";


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
                  console.log('RAW RES=> ', res)
                  // if (!Array.isArray(res)) {
                  //   return 'results are not array'
                  // }
                  // else {
                      // store response in a array
                      let results = res.data.data
                      //console log the results
                      console.log('DATA from RESULT=> ', results);
                      //map through the array 
                      results = results.map((result, index) => {
                          //store data/information in a new object 
                          result = {
                              key: index,
                              id: index,
                              desc: result.desc,
                              repairHours: result.repair.hours,
                              repairLaborRate: result.repair.labor_rate_per_hour,
                              repairPartCost: result.repair.part_cost,
                              repairLaborCost: result.repair.labor_cost,
                              repairMiscCost: result.repair.misc_cost,
                              repairTotalCost: result.repair.total_cost,
                              repairTSB: result.tsb.file_url

                            
                          }
                          return result;
                      })
                      // reset the sate of the empty books array to the new arrays of objects with properties geting back from the response
                this.setState({ diagnosis: results, error: "" }, () => console.log('AFTER SETTING STATE',this.state.diagnosis))
              })
              .catch(err => this.setState({ error: err }));
      }
  
    render() {
      console.log('REPAIR STATE on Render=>', this.state)
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
              <Col size="md-10">
                <Jumbotron>
                  <h1 style={{marginTop: 50}} className="text-light">Search for your car's diagnosis</h1>
                </Jumbotron>                   
              <Col size="md-6">
                  <br></br>
                  <br></br>
                <SearchDiagnostics
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <br></br>
              </Col>
                <br></br>               
                <DiagnosticsResult diagnostics={this.state.diagnosis} handleSavedButton={this.handleSavedButton} />          
            </Col>
            </Row>
          </Container>
        );
      }
    }
  }
  
  export default RepairDiagnostic;