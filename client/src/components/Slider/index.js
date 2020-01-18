import React from "react";
import Carousel from 'react-bootstrap/Carousel'



function Slider() {
  return (
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://docs.google.com/uc?id=1dbZ6mZXw6seSN_e5YBDeS1w3YFVqWAbR"
      alt="First slide"
    />
      <Carousel.Caption>
      <h1 style={{marginBottom: 280}}>Search the Web for any problem you come across</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://docs.google.com/uc?id=1oDE3ivmEYtxmkbwhZc74Pw2tOwaTAYYx"
      alt="Second slide"
    />
          <Carousel.Caption>
      <h1 style={{marginBottom: 280}}>Enter DTC to get Repair/Diagnostic Information</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://docs.google.com/uc?id=1lbaspiwi9I5iuuNnHgc8nIbQxHy0SNi4"
      alt="Third slide"
    />
          <Carousel.Caption>
      <h1 style={{marginBottom: 280}}>Technician Servive Bulleting are available</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://docs.google.com/uc?id=1habDjgitQQ9E6XUsOzFFdImT6n3N_7AC"
      alt="Fourth slide"
    />
          <Carousel.Caption>
      <h1 style={{marginBottom: 280}}>Log your work and keep records for your customers</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://docs.google.com/uc?id=1hnOHhR_e_jJyG8xwnFJYApDFKefRP5q1"
      alt="Fifth slide"
    />
          <Carousel.Caption>
      <h1 style={{marginBottom: 280}}>Retrieve Maintenance info on demand</h1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    
  );
}


export default Slider;