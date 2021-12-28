import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import '../picksoul_custom.scss';
import ResumeP1 from '../images/resume/PBirlem_Resume_P1.svg';
import ResumeP2 from '../images/resume/PBirlem_Resume_P2.svg';
import ResumeP3 from '../images/resume/PBirlem_Resume_P3.svg';
import ResumeP4 from '../images/resume/PBirlem_Resume_P4.svg';

const Resume = () => {
  return (
    <section>
  <Container>
  <Row>
          <img class='img' src={ResumeP1} alt='ResumeP1' />
  </Row>    <Row>
              <img class='img' src={ResumeP2} alt='ResumeP2' />
      </Row>    <Row>
                  <img class='img' src={ResumeP3} alt='ResumeP3' />
          </Row>
    <Row>
            <img class='img' src={ResumeP4} alt='ResumeP4' />
    </Row>
  </Container>
    </section>
  );
};

export default Resume;
