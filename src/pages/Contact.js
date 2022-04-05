import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import '../picksoul_custom.scss';

const Contact = () => {
  return (
    <section>
    <Jumbotron>
<h1>Give Me A Holler!</h1>
<p>
  Whether it's an old-fashioned phone call, visit from a carrier pigeon, smoke signal, email or whaterver your favorite form of communication may be, I'm here to help!
</p>
<p>
  <Button variant="primary">Learn more</Button>
</p>
</Jumbotron>
<Row>
  <Col xs={12} md={4}>
    xs=6 md=4
  </Col>
  <Col xs={12} md={8}>
    xs=6 md=4
  </Col>

</Row>
    </section>





  );
};

export default Contact;
