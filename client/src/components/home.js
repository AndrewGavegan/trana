import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <Container className="main">
      <Row className="row">
        <Col xs={3} className="col">
          <h2>Trana</h2>
        </Col>
        <Col xs={7} className="col">
          <p>Trana is a way for you and your friends to keep up with eachothers workouts. Whether it's self accountabality that motivates you, or being seen doing
            what you love, Trana offers you a platform to add, share, disect and log your exercise </p>
        </Col>
      </Row>
      <Row>
        <img src={require('./images/img1.JPG')} />
      </Row>
    </Container>
  );
}

export default Home;