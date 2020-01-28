import axios from "axios";
require("dotenv").config();


export default {

  // Get repair/ diagnosis from  Car MD API
  getCarMD: function(vin, mileage, dtc) {
    return axios.get("https://api.carmd.com/v3.0/repair?vin=" + vin + "&mileage=" + mileage + "&dtc=" + dtc,
      {headers: {
        "content-type":"application/json",
        "authorization": process.env.REACT_APP_API_KEY_CARMD_AUTH,
        "partner-token": process.env.REACT_APP_API_KEY_CARMD_TOKEN
        }
      }
    )
  },
  
  //Get maintenance info. from Car MD API
  getCarMD2: function(vin, mileage) {
    return axios.get("https://api.carmd.com/v3.0/maint?vin=" + vin + "&mileage=" + mileage,
      {headers: {
        "content-type":"application/json",
        "authorization": process.env.REACT_APP_API_KEY_CARMD_AUTH,
        "partner-token": process.env.REACT_APP_API_KEY_CARMD_TOKEN
        }
      }
    )
  },
  
  // Gets all books
  getLogbook: function() {
    return axios.get("/api/logs");
  },
  // Gets the book with the given id
  getLog: function(id) {
    return axios.get("/api/logs/" + id);
  },
  // Deletes the book with the given id
  deleteLog: function(id) {
    return axios.delete("/api/logs/" + id);
  },

  putLog: function(id) {
    return axios.put("/api/logs/" + id);
  },
  // Saves a book to the database
  saveLog: function(logData) {
    return axios.post("/api/logs", logData);
  }
};
