import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Feed from './pages/feed';

import { useQuery } from '@apollo/client';
import { GET_YOURSELF } from '../utils/queries';

function Dashboard() {
  const { loading, data } = useQuery(GET_YOURSELF);
  const workouts = data?.getYourself?.workouts || [];

  return (
    <Container className="dashboard">
      <Row className="row">
        <Col xs={7} className="col">
          {loading ? (
            <h2>Loading...</h2>
          ) : (<Feed
            workouts={workouts}
            title="Your Workouts:"
          />)}
        </Col>
        <Col xs={5} className="col">
          <h1 className="titleHeader orange">Need inspiration?</h1>
          <p>Coming soon to Tr&auml;na</p>
          <p>A list of pre described workouts curated expecially to get you up and working out. </p>
          <p><a href="#">View Workouts</a></p>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard;