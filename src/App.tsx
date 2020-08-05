import { hot } from 'react-hot-loader/root';
import React, { FC } from 'react';

import Routes from './routes';

import './styles/index.scss';
import './styles/reset.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';

const App: FC = () => (
  <>
    <Header />
    <Routes />
    <Footer />
  </>
);

export default hot(App);
