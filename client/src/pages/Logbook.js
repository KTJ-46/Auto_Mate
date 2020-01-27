import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link, Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";



class Logbook extends Component {
  state = {
    logs: [],
    customer: "",
    ticket: "",
    hours: "",
    vin: "",
    details: ""
  };

  componentDidMount() {
    this.loadLogbook();
  }

  loadLogbook = () => {
    API.getLogbook()
      .then(res =>
        this.setState({ logs: res.data, customer: "", ticket: "", hours: "", vin: "", details: "" })
      )
      .catch(err => console.log(err));
  };

  deleteLog = id => {
    API.deleteLog(id)
      .then(res => this.loadLogbook())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.ticket && this.state.hours) {
      API.saveLog({
        customer: this.state.customer,
        ticket: this.state.ticket,
        hours: this.state.hours,
        vin: this.state.vin,
        details: this.state.details,
        date: this.state.date
      })
        .then(res => this.loadLogbook())
        .catch(err => console.log(err));
    }
  };

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
              <a href="/home" className="btn btn-secondary btn-block font-weight-bold" role="button">Home</a>
              <br></br>
              <br></br>
              <a href="/repair" className="btn btn-secondary btn-block font-weight-bold" role="button">Repair/Diagnostic</a>
              <br></br>
              <br></br>
              <a href="/logbook" className="btn btn-secondary btn-block font-weight-bold active" role="button">Logbook</a>
              <br></br>
              <br></br>
              <a href="/maintenance" className="btn btn-secondary btn-block font-weight-bold" role="button">Maintenance</a>            
            </div> 
            </Col>
            <Col size="md-5">
              <form style={{marginTop: 50}}>
                <Input
                  value={this.state.customer}
                  onChange={this.handleInputChange}
                  name="customer"
                  placeholder="Customer (required)"
                />
                <Input
                  value={this.state.ticket}
                  onChange={this.handleInputChange}
                  name="ticket"
                  placeholder="Ticket # (required)"
                />
                <Input
                  value={this.state.vin}
                  onChange={this.handleInputChange}
                  name="vin"
                  placeholder="Vin # (required)"
                />
                <Input
                  value={this.state.hours}
                  onChange={this.handleInputChange}
                  name="hours"
                  placeholder="Hours (required)"
                />
                <TextArea
                  value={this.state.details}
                  onChange={this.handleInputChange}
                  name="details"
                  placeholder="Details (Optional)"
                />
                <FormBtn
                  disabled={!(this.state.customer && this.state.ticket && this.state.vin && this.state.hours )}
                  onClick={this.handleFormSubmit}
                >
                  Submit Log
                </FormBtn>
              </form>
            </Col>
            <Col size="md-5 sm-12">
              {this.state.logs.length ? (
                <List>
                  {this.state.logs.map(log => (
                    <ListItem key={log._id}>
                      <Link to={"/logs/" + log._id}>
                        <strong>
                        Customer: {log.customer}
                        <br></br>  
                        Ticket #: {log.ticket}
                        <br></br>
                        Vin: {log.vin}
                        <br></br>
                        Date: {log.date}
                        </strong>
                      </Link>
                      <DeleteBtn onClick={() => this.deleteLog(log._id)} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3 style={{marginTop: 50}}>No Results to Display</h3>
              )}
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

export default Logbook;
