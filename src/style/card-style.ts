import styled from "styled-components";
import {media} from "./global-style";

const RequestCard = styled.article`
  width: 366px;
  height: 356px;
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 24px 16px 24px 16px;
  margin-bottom: 16px;

  &:not(&:nth-of-type(3n)) {
    margin-right: 16px;
  }

  ${media.phone} {
    width: 100%;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #E5E5E5;
  margin-bottom: 32px;
`;

const MainInfo = styled.div`
  & > h2 {
    color: #323D45;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 4px;
  }

  & > .company-name {
    font-weight: 500;
    font-size: 14px;
    color: #323D45;
    margin-bottom: 24px;
  }

  & > .finished-date {
    margin-bottom: 16px;
    color: #939FA5;
    font-size: 14px;
    font-weight: normal;
  }
`;

const Progress = styled.span`
  display: block;
  color: #FFA000;
  background: #FFFFFF;
  border: 1px solid #FFA000;
  box-sizing: border-box;
  border-radius: 12px;
  width: 50px;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const Detail = styled.div`
  width: 100%;

  & > div {
    margin-bottom: 8px;

    & > label {
      display: inline-block;
      width: 70px;
      min-width: 70px;
      min-height: 20px;
      font-weight: normal;
      font-size: 14px;
      text-align: left;
      margin-right: 32px;
    }

    & > span {
      text-align: left;
      font-weight: bold;
      font-size: 14px;
    }
  }
`;

const ButtonArea = styled.div`
  margin-top: 32px;
  margin-bottom: 24px;
`;

const ShowHistory = styled.button`
  padding: 6px 12px;
  background: #2196F3;
  border-radius: 4px;
  border: none;
  color: #FFFFFF;
  font-weight: 500;
  font-size: 14px;
  margin-right: 8px;
`;
const StartChat = styled.button`
  padding: 6px 12px;
  background: #FFFFFF;
  border: 1px solid #2196F3;;
  box-sizing: border-box;
  border-radius: 4px;
  color: #2196F3;
`;



const CardStyles = {
    RequestCard,
    Title,
    MainInfo,
    Progress,
    Detail,
    ButtonArea,
    ShowHistory,
    StartChat,
};
export default CardStyles;