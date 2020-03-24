import React from 'react';
import {Container, Row, Card, Button} from "react-bootstrap";
import {ItemCard} from './Card'


export const Gallery = () => {
  
   
    return(
        <Container className="Gallery">
            <div className="landing">
                <Row>
                 {/* <p>Gallery goes Here</p> */}
                <ItemCard/>
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