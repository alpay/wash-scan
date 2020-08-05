import { hot } from 'react-hot-loader/root';
import React, { FC } from 'react';

import Routes from './routes';

import './styles/index.scss';
import './styles/reset.scss';
import Header from './components/Header';

const App: FC = () => (
  <>
    <Header />
    <Routes />
    <footer>Footer</footer>
  </>
);

export default hot(App);
