import React from 'react';

const Filter = () => {
    return (
        <div className="filter-zone">
            <div>
                <div className="dropdown">
                    <button className="dropbtn">
                        <span>가공방식</span>
                        <span className="dropbtn_icon"></span>
                    </button>
                    <div className="dropdown-content">
                        <p><input type="checkbox" value={"밀링"}/> 밀링</p>
                        <p><input type="checkbox" value={"선반"}/> 선반</p>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">
                        <span>재료</span>
                        <span className="dropbtn_icon"></span>
                    </button>
                    <div className="dropdown-content">
                        <p><input type="checkbox" value={"알루미늄"}/> 알루미늄</p>
                        <p><input type="checkbox" value={"탄소강"}/> 탄소강</p>
                        <p><input type="checkbox" value={"구리"}/> 구리</p>
                        <p><input type="checkbox" value={"합금강"}/> 합금강</p>
                        <p><input type="checkbox" value={"강철"}/> 강철</p>
                    </div>
                </div>
            </div>
            <div className="only-processing">
                <label className="switch-button">
                    <input type="checkbox"/>
                    <span className="switch"></span>
                </label>
                <span>상담 중인 요청만 보기</span>
            </div>

        </div>
    );
};

export default Filter;