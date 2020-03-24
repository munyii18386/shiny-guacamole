import React from 'react';
import {Container, Row, Col, Image, Card, ListGroup} from "react-bootstrap";
import './Home.css';

export const Home = () => {
        
        const img = require('../img/EarlyAchiever.png')
   
        return(
            <Container className="Home">
                <div className="landing">
                 <h1>Khadija Home Daycare </h1>
                 <p></p>
                    <Row>
                        <Col>
                        
                            <p >
                                We strive to provide every child with a loving, safe, fun, stimulating and
                                structured learning environment. Our hope is that this will that every child
                                that comes through our doors will leave excited to engage with the outside world.
                            </p>

                            <p>
                                We opened our home to provide child care for those who would like an alternative to
                                childcare centers. We are a state licensed home and have been open for the past 10 years.
                                We do have regular compliance checks and strive to take additional courses to better
                                ourselves and in turn are better prepared to take care of every child brought under our care.
                            </p>
                            <p>
                                 <Image src={img} height="350" width="350" fluid />
                            </p>
                           <p>
                                We are proud to be Early Achievers as we strongly belive in the quality of
                                early care and learning.  We work hard to ensure that we can provided high-quality
                                child care and early learning programs that fit our kids. Out goal is to ensure
                                our children have high-quality early learning experiences that help
                                them develop the skills they need to be successful in school and life. 
                                In addtion, we do offer a few added services as follows:
                                <p></p>
                                <div>Fleible payment options (DSHS and private pay accepted)</div>
                                <div>Transportation to and from local schools</div>
                                <div>Nutritious meals and snacks</div>
                                <div>24/7, 7days a week availablility</div>
                                <div>Fun and loving environment</div>
                           </p>
                           <p>
                                We encourage you to call us with any questions or to schedule a tour. 
                                Our contact information is listed below:
                            </p>
                            <p> 
                                <div>
                                <strong>ADDRESS:</strong> 5730 S 144th Street Tukwila WA 98168
                                </div>
                                <div>
                                <strong>PHONE NUMBER:</strong> 206-588-0248
                                </div>
                                <div>
                                <strong>EMAIL:</strong> smilaan@yahoo.com
                                </div>   
                            </p>
                        </Col>
                    </Row>
                </div>
                <footer style={{color: 'red', textAlign: 'center'}}>
                    <p>
                        Company © Khadija Home Daycare. All rights reserved
                    </p>
                </footer> 
            </Container>
        )
}