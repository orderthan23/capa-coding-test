import React, {useEffect, useRef, useState} from 'react';
import {checkboxPropInterface, FilterPropInterface} from "../interface";
import FilterStyles from "../style/filter-style";

const {
    DContent,
    DropIcon,
    DropDown,
    FilterWrapper,
    StatusFilter,
    ResetIcon,
    Reset,
    Switch,
    SwitchBtn,
    DButton
} = FilterStyles


const Filter = ({filter, setFilter}: FilterPropInterface) => {

    const [methodSelector, setMethodSelector] = useState(false);
    const [materialSelector, setMaterialSelector] = useState(false);
    const methodRef = useRef<HTMLDivElement>(null);
    const materialRef = useRef<HTMLDivElement>(null);

    const methods = ["밀링", "선반"];
    const materials = ["알루미늄", "탄소강", "구리", "합금강", "강철"];


    useEffect(() => {
        function methodClickOutside(e: MouseEvent): void {
            if (methodRef.current && !methodRef.current.contains(e.target as Node)) {
                setMethodSelector(false);
            }
        }

        function materialClickOutside(e: MouseEvent): void {
            if (materialRef.current && !materialRef.current.contains(e.target as Node)) {
                setMaterialSelector(false);
            }
        }

        document.addEventListener('mousedown', methodClickOutside);
        document.addEventListener('mousedown', materialClickOutside);
        return () => {
            document.removeEventListener('mousedown', methodClickOutside);
            document.removeEventListener('mousedown', materialClickOutside);
        };
    }, [methodRef, materialRef]);


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

    const resetFilter = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        console.log("filter", filter);
        setFilter({
            method: [],
            material: [],
            status: "",
        });
    }

    const Method = ({value}: checkboxPropInterface) => {
        return (
            <p><input type="checkbox" value={value} defaultChecked={filter.method.includes(value)}
                      onChange={onChangeMethod}/>{value}</p>
        );
    }

    const Material = ({value}: checkboxPropInterface) => {
        return (
            <p><input type="checkbox" value={value} defaultChecked={filter.material.includes(value)}
                      onChange={onChangeMaterial}/>{value}</p>
        );
    }

    return (
        <FilterWrapper>
            <div>
                <DropDown ref={methodRef} onClick={() => setMethodSelector(true)}>
                    <DButton className={`${methodSelector && "selected"}`}>
                        <span>가공방식{filter.method.length > 0 && `(${filter.method.length})`}</span>
                        <DropIcon className="drop-icon"/>
                    </DButton>
                    <DContent className={`${methodSelector && "selected"}`}>
                        {methods.map((method, index) => <Method value={method} key={index}/>)}
                    </DContent>
                </DropDown>

                <DropDown ref={materialRef} onClick={() => setMaterialSelector(true)}>
                    <DButton className={`${materialSelector && "selected"}`}>
                        <span>재료{filter.material.length > 0 && `(${filter.material.length})`}</span>
                        <DropIcon className="drop-icon"/>
                    </DButton>
                    <DContent className={`${materialSelector && "selected"}`}>
                        {materials.map((material, index) => <Material value={material} key={index}/>)}
                    </DContent>
                </DropDown>
                {(filter.method.length > 0 || filter.material.length > 0) &&
                <Reset href="#" onClick={(e) => resetFilter(e)}>
                    <ResetIcon/>필터링 리셋
                </Reset>
                }

            </div>
            <StatusFilter>
                <SwitchBtn>
                    <input type="checkbox" value="상담중" name="status" defaultChecked={filter.status === "상담중"}
                           onChange={onChangeStatus}/>
                    <Switch className="switch"></Switch>
                </SwitchBtn>
                <span>상담 중인 요청만 보기</span>
            </StatusFilter>
        </FilterWrapper>
    );
};

export default Filter;