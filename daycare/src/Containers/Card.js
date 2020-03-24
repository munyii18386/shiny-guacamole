import React from 'react';
import {Container, Row, Col, Card, Button} from "react-bootstrap";

const list = [
    "../img/d1.jpg","../img/d2.jpg","../img/d3.jpg","../img/d4.jpg","../img/d5.jpg",
    "../img/d6.jpg","../img/d7.jpg","../img/d8.jpg","../img/d9.jpg","../img/d10.jpg",
    "../img/d11.jpg","../img/d12.jpg","../img/d13.jpg","../img/d14.jpg","../img/d15.jpg",
    "../img/d16.jpg","../img/d17.jpg","../img/d18.jpg","../img/d19.jpg","../img/d20.jpg",
    "../img/d21.jpg","../img/d22.jpg","../img/d23.jpg","../img/d24.jpg","../img/d25.jpg",
    "../img/d26.jpg","../img/d27.jpg","../img/d28.jpg",    ]
    
export const ItemCard = () => {
        let url = require('../img/d1.jpg')
        console.log(url)

    //    let val =  list.map((i, index) => {
  
    //        let url2 = require(i)
    
    //         return(
    //             <Col key={index}>
    //                 <Card xs={6}  style={{ width: '18rem' }}>
    //                 <Card.Img variant="top" src="holder.js/100px180" />
    //                 <Card.Body>
    //                     <Card.Title>Card Title</Card.Title>
    //                     <Card.Text>
    //                     Some quick example text to build on the card title and make up the bulk of
    //                     the card's content.
    //                     </Card.Text>
    //                     <Button variant="primary">Go somewhere</Button>
    //                 </Card.Body>
    //                 </Card>
    //             </Col>
    //         )
    //     })

        return null
        
    }
    