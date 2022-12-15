import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeroSection = () => {
    return (
        <Container className='hero-section-container'>
            <Row className='h-100'>
                <Col
                    xs='12'
                    md='8'
                    classname='d-flex flex-column justify-content-center text-start px-4 hero-wrap'
                >
                    <div className='mx-4 hero-text'>
                        <h1>Photography Portfolio and My Projects </h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Magni placeat consequatur inventore! Harum
                            autem placeat ducimus assumenda libero sint qui a
                            perspiciatis pariatur, temporibus consequatur. Saepe
                            voluptatum nesciunt cumque at autem fugiat dolorum
                            ipsa voluptas. Eaque.
                        </p>
                    </div>
                    <div className='btns-wrapper  px-4 d-flex align-items-center'>
                        <a href='/'> Read My blog</a>
                        <Button variant='secondary'>Learn More</Button>
                    </div>
                </Col>
                <Col xs='12' md='4'>
                    <div className='img-wrapper'></div>
                </Col>
            </Row>
        </Container>
    );
};

export default HeroSection;
