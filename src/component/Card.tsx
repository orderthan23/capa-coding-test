import React from 'react';
import {RequestInterface} from "../interface";

const Card = () => {
    return (
        <article>
            <div className="request-main">
                <div className="request-title">
                    <h2>자동차 시제품 제작</h2>
                    <p className="company-name">A 고객사</p>
                    <p className="finished-date">2020.12.14까지 납기</p>
                </div>
                <span className="request-processing">
                        상담중
                    </span>
            </div>
            <div className="request-detail">
                <div>
                    <label>도면개수</label>
                    <span>2개</span>
                </div>
                <div>
                    <label>총 수량</label>
                    <span>100개</span>
                </div>
                <div>
                    <label>가공방식</label>
                    <span>밀링, 선반</span>
                </div>
                <div>
                    <label>재료</label>
                    <span>알루미늄</span>
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