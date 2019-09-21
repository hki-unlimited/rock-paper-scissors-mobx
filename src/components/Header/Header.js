import React from 'react';
import MainLogo from '../MainLogo/MainLogo';
import LocaleChanger from '../LocaleChanger/LocaleChanger';
import './Header.scss';

function Header() {
  return (
    <header className="dbs-app-header">
      <MainLogo />
      <LocaleChanger />
    </header>
  );
}

export default Header;
