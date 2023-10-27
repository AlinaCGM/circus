import React from "react";
import MapPlaceholder from "../../assets/placeholder-map.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contactUs.css";
import {
  Form,
  Button,
  ButtonGroup,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function ContactUs() {
  return (
    <div>
      <Container>
        <header className="text-center pt-5">
          <h2>Contact Us</h2>
        </header>
        <Row style={{ backgroundColor: "#343438" }}>
          <Col lg={6} xs={12} className="vertical-separator" >
            <h3>Contact Form</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label style={{ color: 'white' }}>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ color: 'white' }}>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicSubject">
                <Form.Label style={{ color: 'white' }}>Subject</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Subject"
                  name="subject"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} name="message" />
              </Form.Group>
              <ButtonGroup size="md" className="mb-2">
                <Button variant="primary">Submit</Button>
              </ButtonGroup>
            </Form>
            <div className="vertical-separator"/>
           
           
          </Col>
         
          
            
          <Col lg={5} xs={12} >
            <div className="pt-5" >
              <img
                src={MapPlaceholder}
                alt="Map Placeholder"
                style={{ width: "100%", height: "300px", paddingTop:"22px"}}
              />
            </div>
            <div>
              <p>
                Address: 123 Centralgatan, Stockholm, Sweden <br/>
                Email: contact@starfive.se<br/>
                Phone: +46 (123) 456-7890
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUs;
