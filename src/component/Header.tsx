import React, {useEffect, useState} from 'react';
import SideBar from "./SideBar";

const Header = () => {
    const [onSideBar, setOnSideBar] = useState(false);

    useEffect(() => {
        const navWrap = document.querySelector(".navWrap")
        if (navWrap instanceof Element) {
            if (onSideBar) {
                navWrap.classList.add("active");
            } else {
                navWrap.classList.remove("active");
            }
        }
    }, [onSideBar]);

    return (
        <>
            <SideBar onSideBar={onSideBar}/>
            <header>
                <div className="header-left">
                    <button className='toggleMenu' onFocus={(e) => {
                        e.stopPropagation();
                        setOnSideBar(true);
                    }}
                            onBlur={(e) => {
                                e.stopPropagation();
                                setOnSideBar(false);
                            }}
                    >
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </button>
                    <h1 className="header-logo"></h1>
                </div>
                <div className="link-zone">
                    <a className="header-link"><span className="company-icon-white"></span>A 가공 업체</a>
                    <a className="header-link">로그아웃</a>
                </div>
            </header>
        </>
    );
};

export default Header;