import axios from "axios";
import {FilterSearchInterface, RequestInterface} from "./interface";

export const getRequestList = (param:FilterSearchInterface) => {
    return axios.get<RequestInterface[]>('http://localhost:3000/requests', {
        params: param
    });
};