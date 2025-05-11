import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomeScreen() {
  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow">
            <Card.Body className="text-center">
              <Card.Title className="h2 mb-4 text-primary">
                Welcome to EmotionSense
              </Card.Title>
              <img
                src="/assets/emotion-icon.png"
                alt="Emotion Icon"
                className="img-fluid mb-4"
                style={{ maxWidth: '200px' }}
              />
              <Card.Text className="lead">
                EmotionSense listens to your voice (without recording what you say) and helps you track your emotional journey throughout the day.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
} 