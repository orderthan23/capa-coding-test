import React from 'react';
import {CardPropInterface} from "../interface";
import CardStyles from "../style/card-style";
import {COUNSELING, UNMARKED} from "../constants";

const {Detail, MainInfo, Progress, Title, RequestCard, ShowHistory, StartChat, ButtonArea} = CardStyles;

const Card = ({request}: CardPropInterface): JSX.Element => {
    return (
        <RequestCard>
            <Title>
                <MainInfo>
                    <h2>{request.title}</h2>
                    <p className="company-name">{request.client}</p>
                    <p className="finished-date">{request.due}까지 납기</p>
                </MainInfo>
                {request.status === COUNSELING ? (<Progress>{COUNSELING}</Progress>) : null}
            </Title>
            <Detail>
                <div>
                    <label>도면개수</label>
                    <span>{request.count ? request.count : 0}개</span>
                </div>
                <div>
                    <label>총 수량</label>
                    <span>{request.amount ? request.amount : 0}개</span>
                </div>
                <div>
                    <label>가공방식</label>
                    <span>{request.method.length === 0 ? UNMARKED : request.method.join(",")}</span>
                </div>
                <div>
                    <label>재료</label>
                    <span>{request.material.length === 0 ? UNMARKED : request.material.join(",")}</span>
                </div>
            </Detail>
            <ButtonArea>
                <ShowHistory>요청내역보기</ShowHistory>
                <StartChat>채팅하기</StartChat>
            </ButtonArea>
        </RequestCard>
    );
};

export default Card;