import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Dashboard() {
  return (
    <Container>
      <Row>
        <Col xs={7}>1 of 2</Col>
        <Col xs={5}>2 of 2</Col>
      </Row>
    </Container>
  )
}

export default Dashboard;