import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HANDS from '../images/hands.jpg'

const AboutSection = () => {
    return (
        <Container className='about-section-wrapper'>
            <Row>
                <Col
                    xs={12} md={6}
                    className='d-flex flex-column justify-content-center'
                >
                    <h1>About Our Work</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Incidunt perspiciatis illo, natus temporibus
                        voluptatibus voluptas quas neque consectetur ad,
                        laboriosam deserunt quasi. Incidunt dolorem ducimus
                        perspiciatis numquam quod odit minima vel, eius ut
                        deserunt eos consequatur excepturi officia
                        exercitationem natus unde tempora consequuntur esse
                        facilis iste? Neque nihil quia impedit quo facilis
                        veniam earum at harum? Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Nesciunt autem incidunt
                        ratione quia laudantium odit excepturi ullam reiciendis
                        rerum doloribus animi tenetur ipsam aliquam sit, cum
                        voluptate dolorum, nostrum a eos asperiores?
                    </p>
                    <a href='/'> Learn More</a>
                </Col>
                <Col xs={12} md={6} className='about-img-wrapper'>
                    <img alt='hands' src={HANDS} />
                </Col>
            </Row>
        </Container>
    );
};

export default AboutSection;
