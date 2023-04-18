import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header__innerwrap">
        <div className="header__logo-wrap">
          <img
            src="src/assets/images/logo/logo.png"
            alt="netflix"
            width={52}
            height={16}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;