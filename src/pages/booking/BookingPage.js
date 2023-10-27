import React, { useState } from "react";
import { Container, ListGroup, Button, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../booking/booking.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookingComponent from "../../components/booking/BookingComponent";
import acrobats from "../../assets/acrobats.jpg";
import circusText from "../../assets/circus-text.jpg";
import clown from "../../assets/face-paint-clown.jpg";

function BookingPage() {
  const [showDetails, setShowDetails] = useState(false);
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const toggleDetails1 = () => {
    setShowDetails1(!showDetails1);
  };
  const toggleDetails2 = () => {
    setShowDetails2(!showDetails2);
  };

  return (
    <Container>
      <BookingComponent />
      <Row>
        <Col md={12}>
          <div className="d-grid gap-2">
            <Button variant="danger" size="lg">
              Upcoming Shows in December
            </Button>
          </div>

          <ListGroup>
            <ListGroup.Item>
              November 5, 2023 - "Circus Spectacular" -{" "}
              <Button variant="warning" onClick={toggleDetails}>
                {showDetails ? "Hide Details" : "Show Details"}
              </Button>
              {showDetails && (
                <div className="extra-details">
                  <Row>
                    <Col md={6} sm={12}>
                      <img
                        src={acrobats}
                        alt="Acrobats"
                        className="img-fluid"
                        width="100%"
                      ></img>
                    </Col>
                    <Col md={6} sm={12}>
                      <Row>
                        <Col md={4} sm={4}>
                          <label htmlFor="numberOfPersons">
                            Select Seat Type:
                          </label>
                        </Col>
                        <Col md={8} sm={8}>
                          <Form.Control as="select">
                            <option value="Single">Single</option>
                            <option value="Couple">Couple</option>
                            <option value="Family">Family</option>
                            <option value="Large Group">Large Group</option>
                          </Form.Control>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4} sm={4}>
                          <label htmlFor="seatPreference">
                            Seat Preference:
                          </label>
                        </Col>
                        <Col md={8} sm={8}>
                          <input
                            type="text"
                            id="seatPreference"
                            className="form-control"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4} sm={4}>
                          <label htmlFor="seatNumber">Seat Number:</label>
                        </Col>
                        <Col md={8} sm={8}>
                          <input
                            type="text"
                            id="seatNumber"
                            className="form-control"
                          />
                        </Col>
                      </Row>
                      <br />
                      <Row>
                        <Col>
                          <Button variant="danger">Reserve</Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              November 12, 2023 - "Amazing Acrobatics " -{" "}
              <Button variant="warning" onClick={toggleDetails1}>
                {showDetails1 ? "Hide Details" : "Show Details"}
              </Button>
              {showDetails1 && (
                <div className="extra-details">
                  <Row>
                    <Col md={6} sm={12}>
                      <img src={clown} className="img-fluid" width="100%"></img>
                    </Col>
                    <Col md={6} sm={12}>
                      <Row>
                        <Col md={4} sm={4}>
                          <label htmlFor="numberOfPersons">
                            Select Seat Type:
                          </label>
                        </Col>
                        <Col md={8} sm={8}>
                          <Form.Control as="select">
                            <option value="Single">Single</option>
                            <option value="Couple">Couple</option>
                            <option value="Family">Family</option>
                            <option value="Large Group">Large Group</option>
                          </Form.Control>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4} sm={4}>
                          <label htmlFor="seatPreference">
                            Seat Preference:
                          </label>
                        </Col>
                        <Col md={8} sm={8}>
                          <input
                            type="text"
                            id="seatPreference"
                            className="form-control"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4} sm={4}>
                          <label htmlFor="seatNumber">Seat Number:</label>
                        </Col>
                        <Col md={8} sm={8}>
                          <input
                            type="text"
                            id="seatNumber"
                            className="form-control"
                          />
                        </Col>
                      </Row>
                      <br />
                      <Row>
                        <Col>
                          <Button variant="danger">Reserve</Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              November 19, 2023 - "Circus Extravaganza -{" "}
              <Button variant="warning" onClick={toggleDetails2}>
                {showDetails2 ? "Hide Details" : "Show Details"}
              </Button>
              {showDetails2 && (
                <div className="extra-details">
                  <Row>
                    <Col md={6} sm={12}>
                      <img
                        src={circusText}
                        className="img-fluid"
                        width="100%"
                      ></img>
                    </Col>
                    <Col md={6} sm={12}>
                      <Row>
                        <Col md={4} sm={4}>
                          <label htmlFor="numberOfPersons">
                            Select Seat Type:
                          </label>
                        </Col>
                        <Col md={8} sm={8}>
                          <Form.Control as="select">
                            <option value="Single">Single</option>
                            <option value="Couple">Couple</option>
                            <option value="Family">Family</option>
                            <option value="Large Group">Large Group</option>
                          </Form.Control>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4} sm={4}>
                          <label htmlFor="seatPreference">
                            Seat Preference:
                          </label>
                        </Col>
                        <Col md={8} sm={8}>
                          <input
                            type="text"
                            id="seatPreference"
                            className="form-control"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4} sm={4}>
                          <label htmlFor="seatNumber">Seat Number:</label>
                        </Col>
                        <Col md={8} sm={8}>
                          <input
                            type="text"
                            id="seatNumber"
                            className="form-control"
                          />
                        </Col>
                      </Row>
                      <br />
                      <Row>
                        <Col>
                          <Button variant="danger">Reserve</Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default BookingPage;
