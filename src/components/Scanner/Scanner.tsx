import React, { FC, useState } from 'react';
import cx from 'classnames';

import './Scanner.scss';

type Props = JSX.IntrinsicElements['div'] & {};

const Scanner: FC<Props> = ({ className, children, onClick }) => {
  const classNames = cx('Scanner', className);
  return <div className={classNames}></div>;
};

export default Scanner;
