import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftDash from './pages/leftdash';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_WORKOUT } from '../utils/queries';

function Dashboard() {

  const { loading, data } = useQuery(GET_WORKOUT, {
    variables: { _id: id }
  });

  const me = data?.getYourself || [];

  return (
    <Container className="dashboard">
      <Row className="row">
        <Col xs={7} className="col">
          {loading ? (
            <h2>Loading...</h2>
          ) : (<LeftDash
            me={me}
            title={me.username}
          />)}
        </Col>
        <Col xs={5} className="col">2 of 2</Col>
      </Row>
    </Container>
  )
}

export default Dashboard;