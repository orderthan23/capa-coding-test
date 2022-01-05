import React from 'react';
import {SideBarPropInterface} from "../interface";
import SideBarStyles from "../style/sideBar-style";


const {CompanyIcon, MainTitle, LogoArea, NavWrapper, MegaMenu} = SideBarStyles

const SideBar = ({onSideBar}: SideBarPropInterface) => {
    return (
        <NavWrapper className={`${onSideBar ? "active" : ""}`}>
            <MegaMenu className='mega-menu'>
                <LogoArea>
                    <h1></h1>
                </LogoArea>
                <MainTitle>
                    <a href='#'><CompanyIcon/>파트너정밀가공</a>
                </MainTitle>
                <MainTitle>
                    <a href='#'>로그아웃</a>
                </MainTitle>
            </MegaMenu>
        </NavWrapper>
    );
};

export default SideBar;