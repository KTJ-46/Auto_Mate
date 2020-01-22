import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import '../App.css';


class Detail extends Component {
  state = {
    log: {},
    newDetails: '',
    editing: false
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    console.log('OLDD=>', this.state.log);
    if(!this.state.log.ticket) {
      API.getLog(this.props.match.params.id)
      .then(res => this.setState({ log: res.data }))
      .catch(err => console.log(err));
    }
  }

  toggleEditing = () => {
    this.setState({editing: !this.state.editing})
  }

  handleChange = (event) => {
    const {value} = event.target;
    console.log(value);
    this.setState({newDetails:value})
  }

  postChanges = () => {
    console.log('update Database')
    // make ajax call, send obeject BUT w/ this.state.newDetails
  }

  putLog = id => {
    API.getLog(id)
      .then(res => this.loadLogbook())
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.log.details)
    return (
      <Container fluid className="DETAILS">
        <Row className="DETAILS">
          <Col size="md-12">
            <Jumbotron>
              <h1 style={{marginTop: -40}}>
              Customer:  {this.state.log.customer}
              <br></br>
              Ticket #:  {this.state.log.ticket}
              <br></br>
              Vin: {this.state.log.vin}
              <br></br>
              Hours: {this.state.log.hours}             
              <br></br>
              Date: {this.state.log.date}
              </h1>
            </Jumbotron>
          </Col >
        </Row>
        <Row>
          <Col size="md-10 md-offset-2">
          <div  >
            <article >
              <br></br>
              <br></br>
              <h1 className="mx-auto text-light">Details</h1>
              <hr></hr>              
              {!this.state.editing && <p class="text-light">
                {this.state.log.details}            
              </p>}
              {this.state.editing && 
                <span>
                  <textarea style={{height: 300}} className="col-12 text-body"
                  value={this.state.newDetails || this.state.log.details}
                  onChange={(event) => this.handleChange(event)} />
                  <button className="btn btn-info btn-block font-weight-bold" onClick={this.postChanges}>Save</button>
                  <br></br>
                </span>
                } 
                <button className="btn btn-info btn-block font-weight-bold" onClick={this.toggleEditing}>Edit</button>            
            </article>
            <br></br>
          </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
          <a href="/logbook" className="btn btn-info btn-block font-weight-bold" role="button">Back to Logbook</a>
          <br></br>
          <br></br>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
