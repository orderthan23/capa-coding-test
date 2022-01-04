import React, {useState} from 'react';
import {checkboxPropInterface, FilterInterface, FilterPropInterface} from "../interface";

const Filter = ({filter, setFilter}: FilterPropInterface) => {

    const [methodSelector, setMethodSelector] = useState(false);
    const [materialSelector, setMaterialSelector] = useState(false);

    const methods = ["밀링", "선반"];
    const materials = ["알루미늄", "탄소강", "구리", "합금강", "강철"];


    const onChangeMethod = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {checked, value} = e.target;
        const tempFilter = {...filter};
        if (checked) {
            tempFilter.method.push(value);
        } else {
            tempFilter.method.splice(tempFilter.method.indexOf(value), 1);
        }

        setFilter(tempFilter);
    }
    const onChangeMaterial = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {checked, value} = e.target;
        const tempFilter = {...filter};
        if (checked) {
            tempFilter.material.push(value);
        } else {
            tempFilter.material.splice(tempFilter.method.indexOf(value), 1);
        }
        setFilter(tempFilter);
    }
    const onChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {checked, value} = e.target;
        const tempFilter = {...filter};
        if (checked) {
            tempFilter.status = value;
        } else {
            tempFilter.status = "";
        }
        setFilter(tempFilter);
    }

    const Method = ({value}: checkboxPropInterface) => {
        return (
            <p><input type="checkbox" value={value} defaultChecked={filter.method.includes(value)}
                      onChange={onChangeMethod}/>{value}</p>
        );
    }

    const Material = ({value}: checkboxPropInterface) => {
        return (
            <p><input type="checkbox" value={value} defaultChecked={filter.method.includes(value)}
                      onChange={onChangeMaterial}/>{value}</p>
        );
    }

    return (
        <div className="filter-zone">
            <div>
                <div className="dropdown"
                     onFocus={() => {
                         setMethodSelector(true);
                     }}
                     onBlur={() => {
                         console.log("아웃");
                         setMethodSelector(false);
                     }}>
                    <button className={`dropbtn ${methodSelector && "selected"}`}>
                        <span>가공방식</span>
                        <span className="dropbtn_icon"></span>
                    </button>
                    <div className={`dropdown-content ${methodSelector && "selected"}`}>
                        {methods.map((method, index) => <Method value={method} key={index}/>)}
                    </div>
                </div>
                <div className="dropdown"
                     onFocus={() => {
                         setMaterialSelector(true);
                     }}
                     onBlur={() => {
                         setMaterialSelector(false);
                     }}
                >
                    <button className={`dropbtn ${materialSelector && "selected"}`}>
                        <span>재료</span>
                        <span className="dropbtn_icon"></span>
                    </button>
                    <div className={`dropdown-content ${materialSelector && "selected"}`}>
                        {materials.map((material, index) => <Material value={material} key={index}/>)}
                    </div>
                </div>
            </div>
            <div className="only-processing">
                <label className="switch-button">
                    <input type="checkbox" value="상담중" name="status" defaultChecked={filter.status === "상담중"}
                           onChange={onChangeStatus}/>
                    <span className="switch"></span>
                </label>
                <span>상담 중인 요청만 보기</span>
            </div>
        </div>
    );
};

export default Filter;