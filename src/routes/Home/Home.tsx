import React, { FunctionComponent } from 'react';
import Cam from '../../components/Cam/Cam';
import './Home.scss';
import { Container } from 'reactstrap';

const Home: FunctionComponent = () => (
  <div className="Home">
    <Container>
      <div className="intro">
        <h1>AI Powered Wash Label Scanner</h1>
        <h2>Do Laundry Like Your Mother Does</h2>
      </div>
      <Cam />
    </Container>
  </div>
);

export default Home;
