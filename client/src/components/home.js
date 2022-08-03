import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <Container className="home">

      <Row className="row">
        <Col xs={4} className="col1">
          <Row className="row"><h1 className="titleHeader">TR&Auml;NA:</h1></Row>
          <Row className="row"><p>Tr&auml;na is a way for you and other users to keep up with eachothers workouts. Whether it's self accountabality that motivates you, or being seen doing
            what you love. Tr&auml;na offers you a platform to add, share, disect and log your workouts. </p></Row>
        </Col>
        <Col xs={4} className="col">
          <img src={require('./images/img1.JPG')} alt='person working out' />
        </Col>
      </Row>



    </Container >
  );
}

export default Home;