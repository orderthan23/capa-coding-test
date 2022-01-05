import styled from "styled-components";
import {media} from "./global-style";

const Wrapper = styled.section`
  width: 1130px;
  margin-left: auto;
  margin-right: auto;

  ${media.phone} {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ContentArea = styled.main`
  margin: 70px auto 48px auto;
`;

const RequestList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const Intro = styled.div`
  padding-top: 40px;
  padding-bottom: 32px;

  & > h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
  }

  & > p {
    font-size: 16px;
  }
`;

const NoneData = styled.div`
  width: 100%;
  height: 100px;
  font-weight: normal;
  font-size: 14px;
  color: #939FA5;
  line-height: 100px;
  text-align: center;
  border: 1px solid #C2C2C2;
  box-sizing: border-box;
  border-radius: 4px;
`;


const DashboardStyles = {
    Wrapper,
    ContentArea,
    RequestList,
    Intro,
    NoneData,
};
export default DashboardStyles;