import styled from "styled-components";
import {media} from "./global-style";

const NavWrapper = styled.div`
  display: none;

  & > div {
    display: none;
  }

  ${media.phone} {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;

    &.active {
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 10;

      & > .mega-menu {
        transform: translateX(0px);
        -webkit-transform: translateX(0px);
        -moz-transform: translateX(0px);
        -ms-transform: translateX(0px);
        -o-transform: translateX(0px);
        display: block;
      }
    }
  }
`;

const CompanyIcon = styled.span`
  display: inline-block;
  margin-right: 8px;
  width: 15px;
  height: 15px;
  background-image: url("data:image/svg+xml,%3Csvg width='15' height='16' viewBox='0 0 15 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 10.5H10.5V12.1667H12V10.5ZM12 7.16667H10.5V8.83333H12V7.16667ZM13.5 13.8333H7.5V12.1667H9V10.5H7.5V8.83333H9V7.16667H7.5V5.5H13.5V13.8333ZM6 3.83333H4.5V2.16667H6V3.83333ZM6 7.16667H4.5V5.5H6V7.16667ZM6 10.5H4.5V8.83333H6V10.5ZM6 13.8333H4.5V12.1667H6V13.8333ZM3 3.83333H1.5V2.16667H3V3.83333ZM3 7.16667H1.5V5.5H3V7.16667ZM3 10.5H1.5V8.83333H3V10.5ZM3 13.8333H1.5V12.1667H3V13.8333ZM7.5 3.83333V0.5H0V15.5H15V3.83333H7.5Z' fill='%23323D45'/%3E%3C/svg%3E%0A");
`;

const LogoArea = styled.li`
  ${media.phone} {
    display: flex;
    align-items: center;
    padding: 30px;
    border-bottom: 1px solid #E5E5E5;

    & > h1 {
      display: inline-block;
      width: 92px;
      height: 12px;
      background-image: url(images/colorLogo.png);
      background-repeat: no-repeat;
    }
  }
`;

const MegaMenu = styled.ul`
  ${media.phone} {
    position: fixed;
    transform: translateX(-500px);
    -ms-transform: translateX(-500px);
    -o-transform: translateX(-500px);
    -webkit-transform: translateX(-500px);
    -moz-transform: translateX(-500px);
    transition: all 0.5s ease-in-out;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    list-style-type: none;
    margin: 0;
    top: 0px;
    left: 0;
    width: 50%;
    height: 100%;
    z-index: 3;
    background: #FFFFFF;
  }
`;

const MainTitle = styled.li`
  ${media.phone} {
    text-decoration: none;
    list-style: none;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;

    & > a {
      text-decoration: none;
      color: #000000;
    }
  }
`;

const SideBarStyles = {
    NavWrapper,
    CompanyIcon,
    LogoArea,
    MegaMenu,
    MainTitle,
}

export default SideBarStyles;