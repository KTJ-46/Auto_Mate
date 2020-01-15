import React from "react";
import Carousel from 'react-bootstrap/Carousel'



function Slider() {
  return (
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://gdurl.com/W35g"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://docs.google.com/uc?id=1dbZ6mZXw6seSN_e5YBDeS1w3YFVqWAbR"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://docs.google.com/uc?id=1ufOClc8uMLvnOT_a1c8z1e8flAxJOsGD"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://docs.google.com/uc?id=1habDjgitQQ9E6XUsOzFFdImT6n3N_7AC"
      alt="Fourth slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://docs.google.com/uc?id=1hnOHhR_e_jJyG8xwnFJYApDFKefRP5q1"
      alt="Fifth slide"
    />
  </Carousel.Item>
</Carousel>
    
  );
}


export default Slider;