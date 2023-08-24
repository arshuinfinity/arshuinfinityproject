import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFoundPage/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import { Element } from 'react-scroll';


function App() {
  return (
    <Router>
      <Navbar bg="danger"  data-bs-theme="light">
        <Container>
          <Navbar.Brand className="navheading" href="/">
          <img
              alt="logo"
              src={process.env.PUBLIC_URL + '/img.jpg'} 
              width="30"
              height="30"
              className="d-inline-block align-top"
            />&nbsp;ArShu Infinity</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link className="navcolor mx-3" href="/home">Home</Nav.Link>
            <Nav.Link className="navcolor mx-3" href="/about">About</Nav.Link>
            <Nav.Link className="navcolor mx-3" href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
{/*<Element name="home"><Home/></Element>
<Element name="about"><About/></Element>
  <Element name="contact"><Contact/></Element>*/}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
 
    </Router>
  
  );

}

export default App;
