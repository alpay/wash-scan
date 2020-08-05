import React, { FunctionComponent } from 'react';
import './Home.scss';
import { Container } from 'reactstrap';
import Tab from '../../components/Tab';
import Cam from '../../components/Cam';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faCamera } from '@fortawesome/free-solid-svg-icons';

const Home: FunctionComponent = () => {
  return (
    <div className="Home">
      <Container>
        <div className="intro">
          <h1>AI Powered Wash Label Scanner</h1>
          <h2>Do Laundry Like Your Mother Does</h2>
        </div>
        <Tab
          tabs={[
            {
              title: [<FontAwesomeIcon icon={faCamera} />, ' Scan Label'],
              element: <Cam />,
            },
            {
              title: [<FontAwesomeIcon icon={faCloudUploadAlt} />, ' Upload Image'],
              element: '1',
            },
          ]}
        />
      </Container>
    </div>
  );
};

export default Home;
