import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button, Card, Elevation } from "@blueprintjs/core";

const App: React.FC = () => {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Card interactive={true} elevation={Elevation.TWO}>
              <h5>Card heading</h5>
              <p>Card content</p>
              <Button>Submit</Button>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;
