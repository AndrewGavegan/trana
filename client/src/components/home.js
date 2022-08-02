import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <Container className="home">
      <Row className="row">
        <Col xs={3} className="col">
          <h1>Trana:</h1>
          <p>Trana is a way for you and your friends to keep up with eachothers workouts. Whether it's self accountabality that motivates you, or being seen doing
            what you love, Trana offers you a platform to add, share, disect and log your exercise </p>
        </Col>
        <Col xs={7} className="col">
          <img src={require('./images/img1.JPG')} alt='person working out' />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;