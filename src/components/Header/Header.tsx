import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as MyIcon } from '../../images/logo_welbex.svg';
import { itemNavigation, tel } from '../../utils/constans'
import './Header.css';

function Header() {

  return (
    <div className="header">
      <div className='header__wrapper-logo'>
        <MyIcon className='header__logo' />
        <h3 className='header__subtitle'>крупный интегратор CRM в Росcии и ещё 8 странах</h3>
      </div>

      <nav className='header__nav'>
        <ul className='header__nav-list'>
          {itemNavigation.map((item) => (
            <li className='header__item' key={item.id}>
              <Link className='header__link' to={item.href}>{item.value}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <address className='header__contacts'>
        <p className='header__tel'>{tel}</p>
        <ul className='header__contacts-list'>
          <li className='header__contacts-item'><Link className='header__contacts-telegram' to={'#'}></Link></li>
          <li className='header__contacts-item'><Link className='header__contacts-viber' to={'#'}></Link></li>
          <li className='header__contacts-item'><Link className='header__contacts-whatsapp' to={'#'}></Link></li>
        </ul>
      </address>
    </div>
  );
}

export default Header;