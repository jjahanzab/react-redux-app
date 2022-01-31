import React, { useState, useEffect } from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
// import logo from "../../assets/images/iphone.jpg";

const Home = (props) => {

  const sendToCart = (item) => {
    props.addToCartHandler(item);
  }

  const removeToCart = () => {
    props.removeToCartHandler();
  }

  console.log(props);

  return (
    <>
      <Container className='mt-5'>
        <Row className="mt-3">
          <Col md={4} className="text-center">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://static.turbosquid.com/Preview/2015/08/20__03_08_21/iPhone5_Thumbnails_Square_0000.jpg2457faaf-3fdf-4e3a-aa2b-b9515dc837deZoom.jpg" />
              <Card.Body>
                <Card.Title>I-Phone</Card.Title>
                <h6>Price: $1000</h6>
                <Button variant="info" size="sm" onClick={() => sendToCart({name:'iphone', price:1000})}>Add to Cart</Button> {' '}
                <Button variant="danger" size="sm" onClick={() => removeToCart()}>Remove to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}></Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </>
  )
}

export default Home;