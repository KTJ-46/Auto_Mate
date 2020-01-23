import React from "react";
import "./style.css";

const SearchDiagnostics = props => {
    return (
        <form>
            <div className="form-group">
                <label className="SearchDiagnosticsLabel text-light"><h3>Search For Car Repair/Diagnostics</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.vin}
                    type="text"
                    name="vin"
                    placeholder="Enter Car's VIN"
                    onChange={(e)=> props.handleInputChange(e)}
                />
                <br></br>
                  <input className="col-12 form-control"
                    value={props.mileage}
                    type="text"
                    name="mileage"
                    placeholder="Enter Car's Mileage"
                    onChange={(e) => props.handleInputChange(e)}
                />
                <br></br>

                  <input className="col-12 form-control"
                    value={props.dtc}
                    type="text"
                    name="dtc"
                    placeholder="Enter Car's DTC"
                    onChange={(e) => props.handleInputChange(e)}
                />
            </div>
            <button type="submit" className="btn btn-info btn-block font-weight-bold" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}



export default SearchDiagnostics;
