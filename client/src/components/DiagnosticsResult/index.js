import React from "react";
//import "./style.css";
import {Row, Col} from "../Grid"

const DiagnosticsResult = props => {
    return (props.diagnostics.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Diagnostics Results</h3>
                </div>
            </div>
        </div>
    ) : (
            <div className="card">
                <div className="card-body player">
                    <div className="article">
                        <h3>Search Results</h3>
                        {props.diagnostics.map(diagnostic => {
                            return (
                                <li className="search-list list-group-item" key={diagnostic.id}>
                                    <Row className="SearchResult row" id={diagnostic.desc + "Card"}>
                                        {/* col-3 show image of the book */}
                                        <Col size="2" className="bookImage">
                                            <img src={diagnostic.repairTSB}  />
                                        </Col>
                                        <Col size="1" className="emptyCol"/>
                                        {/* col-9 show information of the book */}
                                        <Col size="9" className="bookInfo">
                                            <Row>
                                                <h3 className="bookTitle">{diagnostic.repairHours}</h3>
                                            </Row>
                                            <Row>
                                                <h4 className="bookAuthor">"Cost{diagnostic.repairLaborRate}</h4>
                                            </Row>
                                            <Row>
                                                <p className="bookDescription">d{diagnostic.repairTotalCost}</p>
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
export default DiagnosticsResult