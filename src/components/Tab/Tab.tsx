import React, { FC, useState, ReactNode } from 'react';
import cx from 'classnames';
import { Nav, NavItem, NavLink } from 'reactstrap';

import './Tab.scss';

interface Tab {
  title: ReactNode;
  element: ReactNode;
}

type Props = JSX.IntrinsicElements['div'] & {
  tabs: Tab[];
};

const Tab: FC<Props> = ({ tabs, className }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const classNames = cx('Tab', className);

  const toggle = (tab: number): void => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <div className={classNames}>
      {/* Render tabs */}
      <Nav tabs>
        {tabs.map((tab, index) => (
          <NavItem key={index}>
            <NavLink
              className={cx({ active: activeTab === index })}
              onClick={() => {
                toggle(index);
              }}
            >
              {tab.title}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      {/* Render active element */}
      {tabs[activeTab].element}
    </div>
  );
};

export default Tab;
