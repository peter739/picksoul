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
<h1>Hello, world!</h1>
<p>
  This is a simple hero unit, a simple jumbotron-style component for calling
  extra attention to featured content or information.
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
