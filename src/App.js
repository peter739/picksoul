import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './router/Routes';
import './picksoul_custom.scss';
import './App.scss';
import Nav from 'react-bootstrap/Nav';
import Brand from './components/navbar/Brand';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner';
class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {
  return (
    <Router>
      <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="primary">
      <Brand logo_container/>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="ml-auto">
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/Process">Process</Nav.Link>
    <Nav.Link href="/Casestudies">Case Studies</Nav.Link>
    <Nav.Link href="/Resume">Resume</Nav.Link>
    <Nav.Link href="/Contact">Contact</Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>


        <Routes />
      </div>
    </Router>
  )
}
}

export default App;
