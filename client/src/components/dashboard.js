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
            title="Activity Feed"
          />)}
        </Col>
        <Col xs={5} className="col">2 of 2</Col>
      </Row>
    </Container>
  )
}

export default Dashboard;