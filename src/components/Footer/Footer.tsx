import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { aboutList, menuList, tel } from '../../utils/constans';

function Footer() {
  return (
    <footer className="footer">
      <div className='footer__wrapper' >
        <div className='footer__lists'>
          <div className='footer__about'>
            <h2 className='footer__title'>О компании</h2>
            <ul className='footer__about-list'>
              {aboutList.map((item, i) => (<li key={i} className='footer__about-item'>
                <Link className='footer__link' to={'#'}>{item}</Link>
              </li>))}
            </ul>
          </div>
          <div className='footer__menu'>
            <h2 className='footer__title'>Меню</h2>
            <ul className='footer__menu-list'> {menuList.map((item, i) => (<li key={i} className='footer__menu-item'>
              <Link className='footer__link' to={'#'}>{item}</Link>
            </li>))} </ul>
          </div>
        </div>
        <div className='footer__contacts'>
          <h2 className='footer__title'>Контакты</h2>
          <address className='footer__contacts-address'>
            <span className='footer__contacts-tel'>{tel}</span>
            <ul className='footer__contacts-list'>
              <li className='footer__contacts-item'><Link className='footer__contacts-telegram' to={'#'}></Link></li>
              <li className='footer__contacts-item'><Link className='footer__contacts-viber' to={'#'}></Link></li>
              <li className='footer__contacts-item'><Link className='footer__contacts-whatsapp' to={'#'}></Link></li>
            </ul>
            <p className='footer__contacts-text'>Москва, Путевой проезд 3с1, к 902</p>
          </address>
        </div>
      </div>
      <div>
        <Link className='footer__contacts-all-rights-reserved' to={'#'}>©WELBEX 2022. Все права защищены.</Link>
        <Link className='footer__privacy-policy' to={'#'}>Политика конфиденциальности</Link>
      </div>

    </footer>
  );
}

export default Footer;