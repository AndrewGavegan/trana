import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <Container className="home">

      <Row className="row">
        <Col xs={5} className="col1">
          <Row className="row"><h1 className="titleHeader">TR&Auml;NA:</h1></Row>
          <Row className="row">
            <Col xs={9} className="">
              <p>
                Tr&auml;na is a way for you and other users to keep up with eachothers workouts. Whether it's self accountabality that motivates you, or being seen doing
                what you love. Tr&auml;na offers <br />
                you a platform to add, share, disect <br />
                and log workouts.
              </p>
            </Col>
            <Col xs={12} className="col">
              <Row className="row"><h1 className="titleHeader">The Mission:</h1></Row>
              <p>
                Tr&auml;na's  mission is simple. All about<br /> workouts,
                all about what you did, all about how you feel,<br /> none
                of the fluff. Steering clear of traditional social media components such as comments and conversation threads,<br /> Tr&auml;na focuses on journaling and accountabality to aid you along your fitness journey.
              </p>
            </Col>
          </Row>
        </Col>
        <Col xs={4} className="col">
          <img src={require('./images/img1.JPG')} alt='person working out' />
        </Col>
      </Row>



    </Container >
  );
}

export default Home;