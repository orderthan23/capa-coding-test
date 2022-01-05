import styled from "styled-components";
import {media} from "./global-style";

const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px 0px 40px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background: #1565C0;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  height: 70px;

  ${media.phone} {
    justify-content: flex-start;
  }
`;

const HeaderLogo = styled.h1`
  display: inline-block;
  width: 153px;
  height: 40px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(images/logo.png);
`;

const HeaderLink = styled.a`
  color: #ffffff;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  &:nth-of-type(1):after {
    margin-left: 32px;
    margin-right: 32px;
    display: inline-block;
    content: "|"
  }
`;

const CompanyWhiteIcon = styled.span`
  display : inline-block;
  margin-right : 8px;
  width : 17px;
  height : 15px;
  background-image: url("data:image/svg+xml,%3Csvg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.6666 10.5H11.9999V12.1667H13.6666V10.5ZM13.6666 7.16667H11.9999V8.83333H13.6666V7.16667ZM15.3333 13.8333H8.66659V12.1667H10.3333V10.5H8.66659V8.83333H10.3333V7.16667H8.66659V5.5H15.3333V13.8333ZM6.99992 3.83333H5.33325V2.16667H6.99992V3.83333ZM6.99992 7.16667H5.33325V5.5H6.99992V7.16667ZM6.99992 10.5H5.33325V8.83333H6.99992V10.5ZM6.99992 13.8333H5.33325V12.1667H6.99992V13.8333ZM3.66659 3.83333H1.99992V2.16667H3.66659V3.83333ZM3.66659 7.16667H1.99992V5.5H3.66659V7.16667ZM3.66659 10.5H1.99992V8.83333H3.66659V10.5ZM3.66659 13.8333H1.99992V12.1667H3.66659V13.8333ZM8.66659 3.83333V0.5H0.333252V15.5H16.9999V3.83333H8.66659Z' fill='white'/%3E%3C/svg%3E%0A");
`;

const HeaderLeft = styled.div`
  ${media.phone} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const LinkZone = styled.div`
  ${media.phone}{
    display: none;
  }
`;


const Hamburger = styled.button`
  display : none;
  ${media.phone}{
    display: inline;
    width: 18px;
    height: 40px;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
    padding: 0px 10px 0px 0px;
    z-index: 1;
    margin-right: 19px;
    margin-left: 10px;
    transform: translateX(0px);
    & .bar{
      display: block;
      width: 18px;
      height: 2px;
      background: #FFFFFF;
      border-radius: 1px;
      &:not(&:nth-of-type(3)){
        margin-bottom : 6px;
      }
    }
  }
`;

const HeaderStyles = {
    MainHeader,
    HeaderLogo,
    HeaderLink,
    CompanyWhiteIcon,
    HeaderLeft,
    LinkZone,
    Hamburger,
}

export default HeaderStyles