import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import butchersPic from '../resources/carousel/butchersPic.png'
import groceryPic from '../resources/carousel/groceryPic.png'

const HomePageCarousel = () => (
  <>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={butchersPic}
          alt="ss"
        />
       <Carousel.Caption>
         <h3>First Slide</h3>
         <p>some text</p>
       </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={groceryPic}
          alt="ss"
        />
       <Carousel.Caption>
         <h3>First Slide</h3>
         <p>some text</p>
       </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </>
)

export default HomePageCarousel;