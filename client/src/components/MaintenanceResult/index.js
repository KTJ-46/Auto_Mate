import React from "react";
//import "./style.css";
import {Row, Col} from "../Grid"

const MaintenanceResult = props => {
    return (props.maintenance.length <= 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Maintenance Results</h3>
                </div>
            </div>
        </div>
    ) : (
            <div className="card">
                <div className="card-body player">
                    <div className="article">
                        <h3>Scheduled Maintenance Results</h3>
                        {props.maintenance.map(maintain => {
                            return (
                                <li className="search-list list-group-item" key={maintain.id}>
                                    <Row className="SearchResult row" id={maintain.desc + "Card"}>
                                       
                                        <Col size="1" className="emptyCol"/>
                                        {/* col-9 show information of the book */}
                                        <Col size="9" className="Diagnosis">
                                            
                                            <Row>
                                                <h3 className="diagDesc"> Maintenance Desc: {maintain.desc}</h3>
                                            </Row>
                                            <Row>
                                                <h3 className="diagRepairHour"> Maintenance at mileage: {maintain.dueMileage}</h3>
                                            </Row>
                                           
                                            <Row>
                                                <h4 className="diagLaborRate">Total Maintenance Cost: ${maintain.maintenanceTotalCost}</h4>
                                            </Row>
                                            
                                        </Col>
                                    </Row>
                                    <br></br>
                                    {/* <Row className="buttonDiv ">
                                        <button className="saveBook btn btn-primary" id={book.id} onClick={(event) => props.handleSavedButton(event)}>
                                            Save Book
                                        </button>
                                        <a href={book.link} target="_blank">
                                            <button className="viewBook btn btn-success">
                                                View Book
                                        </button>
                                        </a>
                                    </Row> */}
                                </li>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
}
export default MaintenanceResult