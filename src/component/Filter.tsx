import React, {useState} from 'react';
import {FilterInterface, FilterPropInterface} from "../interface";

const Filter = ({filter, setFilter}: FilterPropInterface) => {

    const [methodSelector, setMethodSelector] = useState(false);
    const [materialSelector, setMaterialSelector] = useState(false);

    console.log("filter", filter);

    const onChangeMethod = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {checked, value} = e.target;
        const tempFilter = {...filter};
        if(checked){
            tempFilter.method.push(value);
        }else{
            tempFilter.method.splice(tempFilter.method.indexOf(value), 1);
        }

        setFilter(tempFilter);
    }
    const onChangeMaterial = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {checked, value} = e.target;
        const tempFilter = {...filter};
        if(checked){
            tempFilter.material.push(value);
        }else{
            tempFilter.material.splice(tempFilter.method.indexOf(value), 1);
        }
        setFilter(tempFilter);
    }
    const onChangeStatus = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {checked, value} = e.target;
        const tempFilter = {...filter};
        if(checked){
            tempFilter.status = value;
        }else{
            tempFilter.status = "";
        }
        setFilter(tempFilter);
    }


    return (
            <div className="filter-zone">
                <div>
                    <div className="dropdown">
                        <button className="dropbtn">
                            <span>가공방식</span>
                            <span className="dropbtn_icon"></span>
                        </button>
                        <div className="dropdown-content">
                            <p><input type="checkbox" value={"밀링"} defaultChecked={filter.method.includes("밀링")} onChange={onChangeMethod}/> 밀링</p>
                            <p><input type="checkbox" value={"선반"} defaultChecked={filter.method.includes("선반")}  onChange={onChangeMethod}/> 선반</p>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">
                            <span>재료</span>
                            <span className="dropbtn_icon"></span>
                        </button>
                        <div className="dropdown-content">
                            <p><input type="checkbox" value={"알루미늄"} defaultChecked={filter.method.includes("알루미늄")} onChange={onChangeMaterial}/> 알루미늄</p>
                            <p><input type="checkbox" value={"탄소강"} defaultChecked={filter.method.includes("탄소강")} onChange={onChangeMaterial}/> 탄소강</p>
                            <p><input type="checkbox" value={"구리"} defaultChecked={filter.method.includes("구리")} onChange={onChangeMaterial}/> 구리</p>
                            <p><input type="checkbox" value={"합금강"} defaultChecked={filter.method.includes("합금강")} onChange={onChangeMaterial}/> 합금강</p>
                            <p><input type="checkbox" value={"강철"}  defaultChecked={filter.method.includes("강철")} onChange={onChangeMaterial}/> 강철</p>
                        </div>
                    </div>
                </div>
                <div className="only-processing">
                    <label className="switch-button">
                        <input type="checkbox" value="상담중" name="status" defaultChecked={filter.status === "상담중"} onChange={onChangeStatus}/>
                        <span className="switch"></span>
                    </label>
                    <span>상담 중인 요청만 보기</span>
                </div>
            </div>
    );
};

export default Filter;