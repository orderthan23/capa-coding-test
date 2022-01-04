import React from 'react';

const Header = () => {
    return (
        <header>
            <button className='toggleMenu'>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </button>
            <div className="navWrap">
                <ul className='megaMenu'>
                    <li className="logo-area">
                        <img src="static/images/colorLogo.png"/>
                    </li>
                    <li className="mainTitle">
                        <a href='#' className="mainNav">파트너정밀가공</a>
                    </li>
                    <li className="mainTitle">
                        <a href='' className="mainNav">로그아웃</a>
                    </li>
                </ul>
            </div>
            <img src="static/images/logo.png"/>
            <div className="link-zone">
                <a className="header-link">A 가공 업체</a>
                <a className="header-link">로그아웃</a>
            </div>
        </header>
    );
};

export default Header;