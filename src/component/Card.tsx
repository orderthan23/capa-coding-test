import React from 'react';
import {CardPropInterface, RequestInterface} from "../interface";

const Card = ({request}:CardPropInterface):JSX.Element => {
    return (
        <article key={request.id}>
            <div className="request-main">
                <div className="request-title">
                    <h2>{request.title}</h2>
                    <p className="company-name">{request.client}</p>
                    <p className="finished-date">{request.due}까지 납기</p>
                </div>
                {request.status === '상담중' ?  (<span className="request-processing">
                                        상담중
                                         </span>) : null }
            </div>
            <div className="request-detail">
                <div>
                    <label>도면개수</label>
                    <span>{request.count}개</span>
                </div>
                <div>
                    <label>총 수량</label>
                    <span>{request.amount}개</span>
                </div>
                <div>
                    <label>가공방식</label>
                    <span>{request.method.join(",")}</span>
                </div>
                <div>
                    <label>재료</label>
                    <span>{request.material.join(",")}</span>
                </div>
            </div>
            <div className="request-btn-area">
                <button className="detail-btn">요청내역보기</button>
                <button className="chat-btn">채팅하기</button>
            </div>
        </article>
    );
};

export default Card;