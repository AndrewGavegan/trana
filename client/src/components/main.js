import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftMain from './pages/leftmain';
import RightMain from './pages/rightmain';
import Feed from './pages/feed';

function Content() {
  return (
    <Container className="main">
      <Row className="row">
        <Col xs={3} className="col">
          <LeftMain />
        </Col>
        <Col xs={7} className="col">
          <Feed />
        </Col>
        <Col xs={2} className="col">
          <RightMain />
        </Col>
      </Row>
    </Container>
  );
}

export default Content;