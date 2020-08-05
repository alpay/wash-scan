import React, { FC } from 'react';
import { Container, Row, Col } from 'reactstrap';
import cx from 'classnames';

import './Footer.scss';

type Props = {
  className?: string;
};

const Footer: FC<Props> = ({ className }) => {
  const classNames = cx('Footer', className);
  return (
    <footer className={classNames}>
      <Container>
        <Row>
          <Col sm={'6'}>
            <div className="logo">
              <img src="../../../assets/logo.png" alt="Logo" />
            </div>
            <h3>AI Powered Wash Label Scanner</h3>
            <h3>Do Laundry Like Your Mother Does</h3>
            <ul className={'social'}>
              <li>A</li>
              <li>B</li>
              <li>C</li>
            </ul>
          </Col>
          <Col sm={'6'}>
            <p className="Footer-title">Title</p>
            <ul className="Footer-menu">
              <li>
                <h3>Test</h3>
              </li>
              <li>
                <h3>Menu</h3>
              </li>
              <li>
                <h3>Item</h3>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
