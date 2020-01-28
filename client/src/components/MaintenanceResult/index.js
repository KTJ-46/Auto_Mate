import React from "react";
import "./style.css";
import {Row, Col} from "../Grid"

const MaintenanceResult = props => {
    return (props.maintenance.length <= 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Suggested Maintenance:</h3>
                </div>
            </div>
        </div>
    ) : (
            <div className="card">
                <div className="card-body player">
                    <div className="article">
                        <h3>Suggested Maintenance</h3>
                        {props.maintenance.map((maintain, k) => {
                            return (
                               
                                <ol>
                                <li className="search-list list-group-item" key={maintain.id}>
                                    <Row className="MaintenanceResult row" id={maintain.desc + "Card"}>
                                    
                                        <Col size="9" className="Maintenance">
                                            
                                            <Row>
                                                <h3 className="maintainDesc">{k+1}.  Maintenance Needed: {maintain.desc}</h3>
                                            </Row>
                                            <Row>
                                                <h3 className="maintainMileage"> Maintenance at mileage: {maintain.dueMileage}</h3>
                                            </Row>
                                           
                                            <Row>
                                                <h4 className="maintainTotalCost">Total Maintenance Cost: ${maintain.maintenanceTotalCost}</h4>
                                            </Row>
                                        </Col>
                                    </Row>
                                </li>
                                </ol>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
}
export default MaintenanceResult