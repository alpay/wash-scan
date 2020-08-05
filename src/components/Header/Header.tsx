import React, { FC } from 'react';
import cx from 'classnames';

import './Header.scss';

type Props = {
  className?: string;
};

const Header: FC<Props> = ({ className }) => {
  const classNames = cx('Header', className);

  return (
    <header className={classNames}>
      <div className="logo">
        <img src="../../../assets/logo.png" alt="Logo" />
      </div>
    </header>
  );
};

export default Header;
