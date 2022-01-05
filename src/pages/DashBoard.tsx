import React, {useEffect, useState} from 'react';
import {FilterInterface, FilterSearchInterface, RequestInterface} from "../interface";
import Header from "../component/Header";
import Filter from "../component/Filter";
import Card from "../component/Card";
import {getRequestList} from "../api";
import {defaultFilter} from "../constants";

const DashBoard = () => {

    const [reqList, setReqList] = useState<RequestInterface[]>([]);
    const [filter, setFilter] = useState<FilterInterface>(defaultFilter);

    useEffect(() => {
        const param: FilterSearchInterface = {
            method_like: filter.method.length > 0 ? filter.method : null,
            material_like: filter.material.length > 0 ? filter.material : null,
            status: filter.status !== "" ? filter.status : null,
        }

        getRequestList(param).then((requestList) => {
            return setReqList(requestList.data);
        });


    }, [filter]);


    const CardList = () => {
        return (
            <div className="request-zone">
                {reqList.length > 0 ? reqList.map((request) => <Card request={request} key={request.id}/>)
                    : <div className="data-none"><h1>조건에 맞는 견적 요청이 없습니다.</h1></div>
                }
            </div>
        );
    }

    const DashBoardTitle = () => {
        return (
            <div className="request-intro">
                <h1>들어온 요청</h1>
                <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
            </div>
        );
    }

    return (
        <>
            <Header/>
            <section>
                <main>
                    <DashBoardTitle/>
                    <Filter filter={filter} setFilter={setFilter}/>
                    <CardList/>
                </main>
            </section>
        </>

    );
};

export default DashBoard;