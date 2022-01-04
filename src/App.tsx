import React, {useEffect, useState} from 'react';
import "./static/css/dashboard.css";
import Header from "./component/Header";
import Filter from "./component/Filter";
import Card from "./component/Card";
import axios from "axios";
import {RequestInterface} from "./interface";



function App() {
    const [reqList, setReqList] = useState<RequestInterface[]>([]);
    console.log("reqList", reqList);

    useEffect(() => {
        (async() =>{
            const response = await fetch('http://localhost:4000/requests')
            const result = await response.json();
            setReqList(result);
        })();
    }, []);

    return (
        <>
            <Header/>
            <section>
                <main>
                    <div className="request-intro">
                        <h1>들어온 요청</h1>
                        <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
                    </div>
                    <Filter/>
                    <div className="request-zone">
                        {reqList.map((request)=>{
                            return(
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

                        })}

                    </div>
                </main>
            </section>
        </>

    );
}

export default App;
