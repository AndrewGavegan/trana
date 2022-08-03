import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftDash from './pages/leftdash';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_YOURSELF } from '../utils/queries';

function Dashboard() {

  const { _id } = useParams();

  const { loading, data } = useQuery(GET_YOURSELF, {
    variables: { _id: _id },
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
            title={me}
          />)}
        </Col>
        <Col xs={5} className="col">2 of 2</Col>
      </Row>
    </Container>
  )
}

export default Dashboard;