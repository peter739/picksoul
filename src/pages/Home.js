import React from 'react';
import styled from 'styled-components';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Picksoul_cereal from '../images/home_img/cereal.png';
import '../picksoul_custom.scss';
import Home_heart_and_banner from '../images/home_img/home_heart_and_banner.svg';

const Home = () => {
  return (
        <Container>
          <Row justify-content-center>
              <Col xs={12} md={12}>
                <div class="home_page_title">Peter Birlem</div>
              </Col>
          </Row>
          <Row>
            <Col xs={12} >
              <div class="ps_title_text">Product Design & Development</div>
            </Col>


            <img class='img' src={Picksoul_cereal} alt='Picksoul Cereal' />
            <Col xs={12} md={12}>
                <div class='heart'>
                <img class='heart img' src={Home_heart_and_banner} alt='Home_heart_and_banner'/>
              </div>
            </Col>
          </Row>
        </Container>
  );
};

export default Home;
