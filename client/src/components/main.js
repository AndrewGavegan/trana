import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_WORKOUTS } from '../utils/queries';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftMain from './pages/leftmain';
import RightMain from './pages/rightmain';
import Feed from './pages/feed';

const Content = () => {
  const { loading, data } = useQuery(GET_ALL_WORKOUTS);
  const workouts = data?.getAllWorkouts || [];

  return (
    <Container className="main">
      <Row className="row">
        <Col xs={12} className="col">
          {loading ? (
            <h2>Loading...</h2>
          ) : (<Feed
            workouts={workouts}
            title="Activity Feed"
          />)}
        </Col>
      </Row>
    </Container>
  );
}

export default Content;