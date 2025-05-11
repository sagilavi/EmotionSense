import React, { useState } from 'react';
import { Container, Card, Row, Col, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ActivationScreen() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisInterval, setAnalysisInterval] = useState('5');
  const [recordingDuration, setRecordingDuration] = useState('20');

  const handleStartAnalysis = async () => {
    try {
      // Request permissions
      const permissions = await Promise.all([
        requestMicrophonePermission(),
        requestStoragePermission(),
        requestBackgroundPermission(),
      ]);

      if (permissions.every(permission => permission)) {
        setIsAnalyzing(true);
      } else {
        alert('Please grant all required permissions to start analysis.');
      }
    } catch (error) {
      alert('Failed to start analysis. Please try again.');
    }
  };

  const handleStopAnalysis = () => {
    setIsAnalyzing(false);
  };

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="h2 mb-4 text-center text-primary">
                Start Emotion Tracking
              </Card.Title>

              <div className="text-center mb-4">
                <Button
                  variant={isAnalyzing ? 'danger' : 'success'}
                  size="lg"
                  onClick={isAnalyzing ? handleStopAnalysis : handleStartAnalysis}
                  className="px-5"
                >
                  {isAnalyzing ? 'Pause Analysis' : 'Start Analyzing'}
                </Button>
              </div>

              <Form>
                <Form.Group className="mb-4">
                  <Form.Label className="h5">How often to analyze?</Form.Label>
                  <div className="d-flex gap-2 mb-2">
                    {['5', '12', '25'].map((value) => (
                      <Button
                        key={value}
                        variant={analysisInterval === value ? 'primary' : 'outline-primary'}
                        onClick={() => setAnalysisInterval(value)}
                      >
                        {value} min
                      </Button>
                    ))}
                  </div>
                  <Form.Control
                    type="number"
                    placeholder="Custom interval (minutes)"
                    value={analysisInterval}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnalysisInterval(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="h5">How long to record per analysis?</Form.Label>
                  <div className="d-flex gap-2 mb-2">
                    {['20', '40', '60'].map((value) => (
                      <Button
                        key={value}
                        variant={recordingDuration === value ? 'primary' : 'outline-primary'}
                        onClick={() => setRecordingDuration(value)}
                      >
                        {value} sec
                      </Button>
                    ))}
                  </div>
                  <Form.Control
                    type="number"
                    placeholder="Custom duration (seconds)"
                    value={recordingDuration}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRecordingDuration(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
} 