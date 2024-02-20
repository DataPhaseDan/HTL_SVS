import React from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';

export default function LoginPage() {
  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Row>
        <Col >
          <Card className="shadow border border-3 border-primary">
            <Card.Body>
              <h2 className="fw-bold mb-2 ">HTBLuVA ZSV</h2>
              {/* <p className="mb-5"></p> */}
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="text-center">Email Adresse</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Passwort</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </div>
              </Form>
              {/* <div className="mt-3">
                <p className="mb-0 text-center">
                  Don't have an account?{" "}
                  <a href="#!" className="text-primary fw-bold">
                    Sign Up
                  </a>
                </p>
              </div> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

