import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MindFlowScreen() {
  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="h2 mb-4 text-center text-primary">
                Mind Flow
              </Card.Title>
              <Card.Text>
                Your emotional journey visualization will appear here.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
} 