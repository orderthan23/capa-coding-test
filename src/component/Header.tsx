import React, {useEffect, useState} from 'react';
import SideBar from "./SideBar";
import HeaderStyles from "../style/header-style";

const {CompanyWhiteIcon, HeaderLink, HeaderLogo, MainHeader, LinkZone, HeaderLeft, Hamburger} = HeaderStyles;


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

    const openSideBar = (e: React.FocusEvent<HTMLButtonElement, Element>, isOpen:boolean) => {
        e.stopPropagation();
        setOnSideBar(isOpen);
    }

    return (
        <>
            <SideBar onSideBar={onSideBar}/>
            <MainHeader>
                <HeaderLeft>
                    <Hamburger
                        onFocus={e => openSideBar(e, true)}
                        onBlur={e => openSideBar(e, false)}
                    >
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </Hamburger>
                    <HeaderLogo/>
                </HeaderLeft>
                <LinkZone>
                    <HeaderLink><CompanyWhiteIcon/>A 가공 업체</HeaderLink>
                    <HeaderLink>로그아웃</HeaderLink>
                </LinkZone>
            </MainHeader>
        </>
    );
};

export default Header;