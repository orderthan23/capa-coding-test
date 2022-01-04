import React from 'react';
import {SideBarPropInterface} from "../interface";

const SideBar = ({onSideBar}:SideBarPropInterface) => {
    return (
        <div className={`navWrap ${onSideBar ? "active" : ""}`}>
            <ul className='megaMenu'>
                <li className="logo-area">
                    <h1></h1>
                </li>
                <li className="mainTitle">
                    <a href='#' className="mainNav"><span className="company-icon"></span>파트너정밀가공</a>
                </li>
                <li className="mainTitle">
                    <a href='' className="mainNav">로그아웃</a>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;