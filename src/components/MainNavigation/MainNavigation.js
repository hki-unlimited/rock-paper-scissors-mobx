import React from 'react';
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import './MainNavigation.scss';

function MainNavigation() {
  const { t } = useTranslation();
  return (
    <Nav className="mr-auto dbs-tabbed-navigation">
      <NavLink to="/" className="nav-link" activeClassName='active' exact={true}
      data-testid="tasks-tab-navlink">
        <span>{t('play')}</span>
      </NavLink>
      <NavLink to="/history" className="nav-link" activeClassName='active'
      data-testid="history-tab-navlink">
        <span>{t('history')}</span>
      </NavLink>
    </Nav>
  );
}

export default MainNavigation;
