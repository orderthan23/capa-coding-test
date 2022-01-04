import React from 'react';
import "./static/css/dashboard.css";
import Header from "./component/Header";
import Filter from "./component/Filter";
import Card from "./component/Card";

function App() {
    return (
        <>
            <Header/>
            <section>
                <main>
                    <div className="request-intro">
                        <h1>들어온 요청</h1>
                        <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
                    </div>

                    <div className="only-processing">
                        <label className="switch-button">
                            <input type="checkbox"/>
                            <span className="switch"></span>
                        </label>
                        <span>상담 중인 요청만 보기</span>
                    </div>
                    <Filter/>
                    <div className="request-zone">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </main>
            </section>
        </>

    );
}

export default App;
