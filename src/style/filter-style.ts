import styled, {keyframes} from "styled-components";
import {media} from "./global-style";

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;

  ${media.phone} {
    display: block;
  }
`;

const DropDown = styled.div`
  position: relative;
  display: inline-block;
`;

const DButton = styled.button`
  border: 1px solid #939FA5;
  border-radius: 4px;
  background-color: #FFFFFF;
  font-weight: 400;
  font-size: 12px;
  color: #323D45;
  cursor: pointer;
  padding: 9px 19px 9px 12px;
  margin-right: 8px;
  text-align: left;

  &:hover {
    border: 1px solid #2196F3;
  }

  &.selected {
    background: #1565C0;
    border: 1px solid #939FA5;
    color: white;

    & > .drop-icon {
      background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0.5L5 5.5L10 0.5H0Z' fill='white'/%3E%3C/svg%3E%0A");
    }
  }
`;

const DContent = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
  font-weight: 500;
  font-size: 14px;
  background-color: #FFFFFF;
  border: 1px solid #939FA5;
  border-radius: 4px;
  width: 130px;
  margin-top: 4px;
  padding: 17px 12px 17px 12px;

  & > p {
    margin-bottom: 8px;

    & > input {
      margin-right: 10px;
    }
  }

  &.selected {
    display: block;
  }
`;

const DropIcon = styled.span`
  display: inline-block;
  position: relative;
  width: 10px;
  height: 6px;
  padding: 2px;
  margin-left: 12px;
  background-repeat: no-repeat;
  vertical-align: middle;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0.5L5 5.5L10 0.5H0Z' fill='%23939FA5'/%3E%3C/svg%3E%0A");
`;


const Reset = styled.a`
  margin-left: 24px;
  font-size: 12px;
  font-weight: normal;
  color: #2196F3;
  line-height: 16px;
  display: inline-flex;
  text-decoration: none;
`;

const Spinner = keyframes`

  100% {
    transform: rotate(360deg);
  }
`;

const ResetIcon = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 12px;
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.645 2.35C12.195 0.9 10.205 0 7.995 0C3.575 0 0.00500488 3.58 0.00500488 8C0.00500488 12.42 3.575 16 7.995 16C11.725 16 14.835 13.45 15.725 10H13.645C12.825 12.33 10.605 14 7.995 14C4.685 14 1.995 11.31 1.995 8C1.995 4.69 4.685 2 7.995 2C9.655 2 11.135 2.69 12.215 3.78L8.995 7H15.995V0L13.645 2.35Z' fill='%232196F3'/%3E%3C/svg%3E%0A");
  animation: ${Spinner} 7s linear infinite;
  transform-origin: 50% 50%;
`;

const StatusFilter = styled.div`
  ${media.phone} {
    margin-top: 20px;
  }

  & > span {
    font-size: 14px;
    color: #323D45;
  }
`;

const SwitchBtn = styled.label`
  position: relative;
  display: inline-block;
  width: 55px;
  height: 30px;

  & input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .switch {
      background-color: #BBDEFB;

      &:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
        background: #2196F3;
      }
    }
  }
`;

const Switch = styled.span`
  position: absolute;
  cursor: pointer;
  top: 3px;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  width: 34px;
  height: 14px;
  background-color: #C2C2C2;
  -webkit-transition: .4s;
  transition: .4s;
  margin-left: 10px;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: -10px;
    bottom: -3px;
    background-color: #F5F5F5;
    -webkit-transition: .5s;
    transition: .4s;
    border-radius: 20px;
  }
`;


const FilterStyles = {
    FilterWrapper,
    DropDown,
    DButton,
    DContent,
    DropIcon,
    Reset,
    ResetIcon,
    StatusFilter,
    SwitchBtn,
    Switch,
};
export default FilterStyles;