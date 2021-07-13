import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Slide1 from '../images/my_process_img/slide1.jpg';
import Slide2 from '../images/my_process_img/slide2.jpg';


const Process = () => {
  return (

      <Carousel>
        <Carousel.Item>
        <img class='img' src={Slide1} alt='Slide1' />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img class='img' src={Slide2} alt='Slide2' />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img class='img' src={Slide2} alt='Slide2' />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

  );
};

export default Process;
