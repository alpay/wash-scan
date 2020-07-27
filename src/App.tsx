import { hot } from 'react-hot-loader/root';
import React, { FC } from 'react';

import Routes from './routes';

import './styles/index.scss';
import './styles/reset.scss';

const App: FC = () => (
  <>
    <header>Header</header>
    <Routes />
    <footer>Footer</footer>
  </>
);

export default hot(App);
