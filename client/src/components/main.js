import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSide from './pages/leftside';
import RightSide from './pages/rightside';

function Content() {
  return (
    <Container className="main">
      <Row className="row">
        <Col xs={3} className="col">
          <LeftSide />
        </Col>
        <Col xs={7} className="col">2 of 3</Col>
        <Col xs={2} className="col">
          <RightSide />
        </Col>
      </Row>
    </Container>
  );
}

export default Content;