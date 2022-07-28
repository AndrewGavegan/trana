import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Dashboard() {
  return (
    <Container className="dashboard">
      <Row className="row">
        <Col xs={7} className="col">1 of 2</Col>
        <Col xs={5} className="col">2 of 2</Col>
      </Row>
    </Container>
  )
}

export default Dashboard;