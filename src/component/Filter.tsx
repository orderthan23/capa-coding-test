import React, {useEffect, useRef, useState} from 'react';
import {CheckboxPropInterface, DropDownBoxInterface,DropDownBoxPropInterface, FilterPropInterface} from "../interface";
import FilterStyles from "../style/filter-style";
import {
    COUNSELING,
    MATERIAL_KR,
    MATERIAL_NAME,
    MATERIALS,
    METHODES,
    METHOD_KR,
    METHOD_NAME,
    STATUS_NAME
} from "../constants";

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


    const MethodOptions:DropDownBoxInterface = {

        choiceRef : methodRef,
        selector : methodSelector,
        setSelector: setMethodSelector,
        optionType: filter.method,
        optionKr : METHOD_KR,
        list : METHODES,
        name : METHOD_NAME,

    };
    const MaterialOptions:DropDownBoxInterface = {
        choiceRef : materialRef,
        selector : materialSelector,
        setSelector: setMaterialSelector,
        optionType: filter.material,
        optionKr : MATERIAL_KR,
        list : MATERIALS,
        name : MATERIAL_NAME
    }


    useEffect(() => {
        function clickOutside(e: MouseEvent): void {
            if (methodRef.current && !methodRef.current.contains(e.target as Node)) {
                setMethodSelector(false);
            }
            if (materialRef.current && !materialRef.current.contains(e.target as Node)) {
                setMaterialSelector(false);
            }
        }

        document.addEventListener('mousedown', clickOutside);
        return () => {
            document.removeEventListener('mousedown', clickOutside);
        };
    }, [methodRef, materialRef]);


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {checked, value, name} = e.target;
        const tempFilter = {...filter};

        switch (name) {
            case METHOD_NAME:
                if (checked) {
                    tempFilter.method.push(value);
                } else {
                    tempFilter.method.splice(tempFilter.method.indexOf(value), 1);
                }
                break;
            case MATERIAL_NAME :
                if (checked) {
                    tempFilter.material.push(value);
                } else {
                    tempFilter.material.splice(tempFilter.method.indexOf(value), 1);
                }
                break;
            case STATUS_NAME:
                if (checked) {
                    tempFilter.status = value;
                } else {
                    tempFilter.status = "";
                }
        }
        setFilter(tempFilter);
    }

    const resetFilter = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setFilter({
            ...filter,
            method: [],
            material: [],
        });
    }

    const Options = ({value, name}: CheckboxPropInterface) => {
        const optionType = name === METHOD_NAME ? filter.method : filter.material;
        return (
            <p>
                <input type="checkbox"
                       name={name}
                       value={value}
                       defaultChecked={optionType.includes(value)}
                       onChange={onChange}
                />{value}
            </p>
        );
    }

    const DropDownBox = ({options}:DropDownBoxPropInterface) => {
        const {optionType,optionKr,choiceRef,setSelector,selector,name,list} = options
        return (
            <DropDown ref={choiceRef} onClick={() => setSelector(true)}>
                <DButton className={`${selector && "selected"}`}>
                    <span>{optionKr}{optionType.length > 0 && `(${optionType.length})`}</span>
                    <DropIcon className="drop-icon"/>
                </DButton>
                <DContent className={`${selector && "selected"}`}>
                    {list.map((value, index) => <Options value={value} key={index} name={name}/>)}
                </DContent>
            </DropDown>
        )
    }

    return (
        <FilterWrapper>
            <div>
                <DropDownBox options={MethodOptions}/>
                <DropDownBox options={MaterialOptions}/>
                {(filter.method.length > 0 || filter.material.length > 0) &&
                <Reset href="#" onClick={(e) => resetFilter(e)}>
                    <ResetIcon/>필터링 리셋
                </Reset>
                }

            </div>
            <StatusFilter>
                <SwitchBtn>
                    <input type="checkbox" value={COUNSELING} name={STATUS_NAME}
                           defaultChecked={filter.status === COUNSELING}
                           onChange={onChange}/>
                    <Switch className="switch"></Switch>
                </SwitchBtn>
                <span>상담 중인 요청만 보기</span>
            </StatusFilter>
        </FilterWrapper>
    );
};

export default Filter;