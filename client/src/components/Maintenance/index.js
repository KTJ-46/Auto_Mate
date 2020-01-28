import React from "react";
//import "./style.css";

const Maintenance = props => {
    return (
        <form>
            <div className="form-group">
                <label className="MaintenanceLabel text-light"><h3>Retrieve Maintenance</h3></label>
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
                
            </div>
            <button type="submit" className="btn btn-info btn-block font-weight-bold" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}



export default Maintenance;
