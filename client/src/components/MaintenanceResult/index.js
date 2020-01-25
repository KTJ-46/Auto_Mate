import React from "react";
//import "./style.css";
import {Row, Col} from "../Grid"

const MaintenanceResult = props => {
    return (props.maintenance.length === 0) ? (
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
                        {props.maintenance.map(diagnostic => {
                            return (
                                <li className="search-list list-group-item" key={diagnostic.id}>
                                    <Row className="SearchResult row" id={diagnostic.desc + "Card"}>
                                       
                                        <Col size="1" className="emptyCol"/>
                                        {/* col-9 show information of the book */}
                                        <Col size="9" className="Diagnosis">
                                            
                                            <Row>
                                                <h3 className="diagDesc"> Diagnosis: {diagnostic.desc}</h3>
                                            </Row>
                                            <Row>
                                                <h3 className="diagRepairHour"> Repair Hours needed for the job: {diagnostic.repairHours}</h3>
                                            </Row>
                                           
                                            <Row>
                                                <h4 className="diagLaborRate">Hourly Labor Rate: ${diagnostic.repairLaborRate}</h4>
                                            </Row>
                                            <Row>
                                                <h3 className="diagPartsCost"> Cost of the parts: ${diagnostic.repairPartCost}</h3>
                                            </Row>
                                            <Row>
                                                <p className="diagMiscCost">Miscellaneous/ Hazmat: ${diagnostic.repairMiscCost}</p>
                                            </Row>
                                            <Row>
                                                <p className="diagTotalCost">Total Cost of the job: ${diagnostic.repairTotalCost}</p>
                                            </Row>
                                            <Row>
                                                <p className="diagTSB">Technician Service Bulletin: {diagnostic.repairTSB}</p>
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