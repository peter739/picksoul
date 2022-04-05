import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import footer_1 from '../../images/home_img/footer_1.svg';

import {
  Box,
  Container,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";


const Footer = () => {

  return (



<Container>
      <Row className="justify-content-md-center">

      <Col md="2" offset="1" sm="12" style={{align:"center"}}>
            <ul>
              <Heading>About</Heading>
                <li><FooterLink href="/Resume">Resume</FooterLink></li>
                <li><FooterLink href="/Testimonials">Testimonials</FooterLink></li>
                <li><FooterLink href="/Contact">Contact</FooterLink></li>
            </ul>
          </Col>
          <Col md="3">
          <ul>
            <Heading>Case Studies</Heading>
              <li><FooterLink href="/Resume">Resume</FooterLink></li>
              <li><FooterLink href="/Testimonials">Testimonials</FooterLink></li>
              <li><FooterLink href="/Contact">Contact</FooterLink></li>
          </ul>
          </Col>
          <Col md="3">
          <ul>
            <Heading>Services</Heading>
              <li><FooterLink href="/Resume">Resume</FooterLink></li>
              <li><FooterLink href="/Testimonials">Testimonials</FooterLink></li>
              <li><FooterLink href="/Contact">Contact</FooterLink></li>
          </ul>
          </Col>
          <Col md="3">
          <ul>
            <Heading>Contact</Heading>
              <li><FooterLink href="/About">About</FooterLink></li>
              <li><FooterLink href="/casestudies">Case Studies</FooterLink></li>
              <li><FooterLink href="/Contact">Contact</FooterLink></li>
          </ul>
          </Col>
          <img class='footer_1 img' src={footer_1} alt='footer_1'/>
      </Row>
  </Container>
  );
};

export default Footer;
