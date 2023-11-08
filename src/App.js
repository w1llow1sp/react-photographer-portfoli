import "./App.scss";
import Header from "./assets/components/Header";
import HeroSection from "./assets/components/HeroSection";
import MenuOverlay from "./assets/components/MenuOverlay";
import ImagesCollection from "./assets/components/ImagesCollection";
import InformationSection from "./assets/components/InformationSection";
import FooterMenu from "./assets/components/FooterMenu";
import ContactForm from "./assets/components/ContactForm";
import AboutSection from "./assets/components/AboutSection";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

import IMG from './assets/images/camera-hand.jpg'

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="App">
      <Container fluid>
        <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <HeroSection />
        <InformationSection />
        <ImagesCollection />
        <AboutSection />
        <Container className="footer-section">
          <Row>
            <div className="contact-us-img">
              <img
                src={IMG}
                alt="hand holding camera"
              ></img>
            </div>
          </Row>
          <Row className="my-3">
            <Col xs={12} md={6}>
              <ContactForm />
            </Col>
            <Col xs={12} md={6}>
              <FooterMenu />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;
