import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion'
const InformationSection = () => {
    const sectionVariants = {
        visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
        hidden: { y: 100, opacity: 0 }
    }
    return (
        <Container className='information-section'>
            <Row>
                <Col lg='6' className='fs-7 px-3 font-weight-bold'>
                    <motion.div
                        variants={sectionVariants}
                        initial='hidden'
                        whileInView='visible'
                    >
                        <p>
                            <span>
                                Lorem, ipsum dolor sit amet consectetur adipisicing
                                elit. Aliquam asperiores nisi, quo vel voluptatibus,
                                id nemo deleniti ratione, similique numquam est?
                                Temporibus, sequi facere! Illum dicta vero
                                voluptatum veritatis labore deleniti. Ad sint natus
                                id, iure nobis nulla mollitia deleniti.
                            </span>
                        </p>
                    </motion.div>
                </Col>
                <Col lg='6' className=' px-3'>
                    <motion.div
                        variants={sectionVariants}
                        initial='hidden'
                        whileInView='visible'
                    >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Animi, repellendus explicabo. Soluta corrupti
                            asperiores molestiae nobis voluptate earum aperiam
                            voluptatibus cum voluptatum vel culpa error, atque, rem
                            nesciunt, magni consectetur eius libero id beatae
                            veritatis quod doloribus. Distinctio, eius reiciendis
                            repellat fugiat voluptatibus ratione laborum aspernatur
                            cupiditate illum omnis vitae.
                        </p>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
};

export default InformationSection;
