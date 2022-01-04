import React, {useEffect, useState} from 'react';
import "./static/css/dashboard.css";
import Header from "./component/Header";
import Filter from "./component/Filter";
import Card from "./component/Card";
import {FilterInterface, FilterSearchInterface, RequestInterface} from "./interface";
import axios, {AxiosResponse} from "axios";


function App() {
    const defaultFilter: FilterInterface = {
        material: [],
        method: [],
        status: "",
    };

    const [reqList, setReqList] = useState<RequestInterface[]>([]);
    const [filter, setFilter] = useState<FilterInterface>(defaultFilter);
    console.log("reqListLength", reqList.length);
    console.log("reqList", reqList);

    useEffect(() => {
        const param:FilterSearchInterface = {
            method_like: filter.method.length > 0 ? filter.method : null,
            material_like: filter.material.length > 0 ? filter.material : null,
            status: filter.status !== "" ? filter.status : null,
        }

        axios.get<RequestInterface[]>('http://localhost:4000/requests', {
            params: param
        }).then((response) => {
            return setReqList(response.data);
        });
    }, [filter]);

    return (
        <>
            <Header/>
            <section>
                <main>
                    <div className="request-intro">
                        <h1>들어온 요청</h1>
                        <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
                    </div>
                    <Filter filter={filter} setFilter={setFilter}/>
                    <div className="request-zone">
                        {reqList.length > 0 ? reqList.map((request) => <Card request={request} key={request.id}/>)
                            : <div className="data-none"><h1>조건에 맞는 견적 요청이 없습니다.</h1></div>
                        }

                    </div>
                </main>
            </section>
        </>

    );
}

export default App;
