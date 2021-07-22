import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Lms_img_hero_1 from '../images/case_study_img/lms_checkout/lms_img_hero_1.jpg';
import Caai_hero from '../images/case_study_img/caai/caai_hero.jpg';
import Wilde_hero from '../images/case_study_img/wilde/wilde_hero.jpg';
import '../picksoul_custom.scss';


const Casestudies = () => {
  const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
      setIsOpen(true);
    };

    const hideModal = () => {
      setIsOpen(false);
    };



  return (


  <Container>
    <Row>
      <CardColumns>
        <Card bg="primary" text="white" >
          <Card.Img variant="top"   src={Lms_img_hero_1} alt='CyberGRX Design System Hero' />
        <Card.Body>
          <Card.Title >#1 CyberGRX Design System</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button  variant="warning" onClick={showModal}>View Casestudy</Button>
              <Modal show={isOpen} size="xl" onHide={hideModal}>
                <Modal.Header className="modal-custom">
                    <Modal.Title>
                      CyberGRX Design System
                    </Modal.Title>
                    <Button varient="warning" onClick={hideModal}>Close</Button>
                </Modal.Header>
                    <Modal.Body>
                      <Card.Img variant="top"   src={Lms_img_hero_1} alt='CyberGRX Design System Hero' />
                    </Modal.Body>
                </Modal>
          </Card.Footer>
      </Card>



        <Card bg="primary" text="white" >
          <Card.Img variant="top"   src={Wilde_hero} alt='wilde hero' />
        <Card.Body>
          <Card.Title >#4 Wilde Platform Redesign</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button  variant="warning" onClick={showModal}>View Casestudy</Button>
              <Modal show={isOpen} size="xl" onHide={hideModal}>
                <Modal.Header>
                    <Modal.Title>
                      Wilde Platform Redesign
                    </Modal.Title>
                    <Button varient="warning" onClick={hideModal}>
                      Close
                    </Button>
                </Modal.Header>

                    <Modal.Body>
                      <Card.Img variant="top"   src={Wilde_hero} alt='Wilde hero' />
                    </Modal.Body>
                </Modal>
          </Card.Footer>
      </Card>

      <Card bg="primary" text="orange" >
        <Card.Img variant="top"   src={Lms_img_hero_1} alt='Censeo Accoustics Design System' />
      <Card.Body>
        <Card.Title >#2 Censeo Design System</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button  variant="warning" onClick={showModal}>View Casestudy</Button>
            <Modal show={isOpen} size="xl" onHide={hideModal}>
              <Modal.Header>
                  <Modal.Title>
                    Censeo Accoustics Design System
                  </Modal.Title>
                  <Button varient="warning" onClick={hideModal}>
                    Close
                  </Button>
              </Modal.Header>
                  <Modal.Body>
                    <Card.Img variant="top"   src={Lms_img_hero_1} alt='Censeo Accoustics Design System Hero' />
                  </Modal.Body>
              </Modal>
        </Card.Footer>
    </Card>

      <Card bg="primary" text="white" >
        <Card.Img variant="top"   src={Lms_img_hero_1} alt='HR Rewards UX Design' />
      <Card.Body>
        <Card.Title >#5 HR Rewards UX Design</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button  variant="warning" onClick={showModal}>View Casestudy</Button>
            <Modal show={isOpen} size="xl" onHide={hideModal}>
              <Modal.Header>
                  <Modal.Title>
                      HR Rewards UX Design
                  </Modal.Title>
                  <Button varient="warning" onClick={hideModal}>
                    Close
                  </Button>
              </Modal.Header>
                  <Modal.Body>
                    <Card.Img variant="top"   src={Lms_img_hero_1} alt='HR Rewards UX Design Hero' />
                  </Modal.Body>
              </Modal>
        </Card.Footer>
    </Card>

    <Card bg="primary" text="white" >
      <Card.Img variant="top"   src={Lms_img_hero_1} alt='LMS Checkout UX Design' />
    <Card.Body>
      <Card.Title >#3 LMS Checkout UX Design</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button  variant="warning" onClick={showModal}>View Casestudy</Button>
          <Modal show={isOpen} size="xl" onHide={hideModal}>
            <Modal.Header>
                <Modal.Title>
                  LMS Checkout UX Design
                </Modal.Title>
                <Button varient="warning" onClick={hideModal}>
                  Close
                </Button>
            </Modal.Header>
                <Modal.Body>
                  <Card.Img variant="top"   src={Lms_img_hero_1} alt='LMS Checkout UX Design Hero' />
                </Modal.Body>
          </Modal>
      </Card.Footer>
  </Card>

  <Card bg="primary" text="white" >
    <Card.Img variant="top"   src={Lms_img_hero_1} alt='Simple Energy UX Redesign (Rebates As A Service) Hero' />
  <Card.Body>
    <Card.Title >#6 Simple Energy UX Redesign</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <Button  variant="warning" onClick={showModal}>View Casestudy</Button>
        <Modal show={isOpen} size="xl" onHide={hideModal}>
          <Modal.Header>
              <Modal.Title>
                Simple Energy RaaS (Rebates As A Service) UX Redesign
              </Modal.Title>
              <Button varient="warning" onClick={hideModal}>
                Close
              </Button>
          </Modal.Header>
              <Modal.Body>
                <Card.Img variant="top"   src={Wilde_hero} alt='imple Energy RaaS (Rebates As A Service) UX Redesign Hero' />
              </Modal.Body>
          </Modal>
    </Card.Footer>
</Card>


</CardColumns>
</Row>
</Container>


  );
};

export default Casestudies;
