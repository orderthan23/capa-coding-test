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
                        <p><input type="checkbox"/> 밀링</p>
                        <p><input type="checkbox"/> 선반</p>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">
                        <span>재료</span>
                        <span className="dropbtn_icon"></span>
                    </button>
                    <div className="dropdown-content">
                        <p><input type="checkbox"/> 알루미늄</p>
                        <p><input type="checkbox"/> 탄소강</p>
                        <p><input type="checkbox"/> 구리</p>
                        <p><input type="checkbox"/> 합금강</p>
                        <p><input type="checkbox"/> 강철</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;