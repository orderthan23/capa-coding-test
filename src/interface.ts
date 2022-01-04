//들어온 요청
import React from "react";

export interface RequestInterface {
    id: number;
    title: string;
    client: string;
    "due": string;
    "count": number;
    "amount": number;
    "method": string[];
    "material": string[];
    "status": string;
};

//Card Components Prop
export interface CardPropInterface {
    request: RequestInterface;
}


//필터
export interface FilterInterface {
    method: string[];
    material: string[];
    status: string;
}

export interface FilterPropInterface {
    filter: FilterInterface;
    setFilter: React.Dispatch<React.SetStateAction<FilterInterface>>;
}

export interface FilterFormInterface extends  React.FormEvent<HTMLFormElement>{
    material? : React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    method? : React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    status? : React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
}

export interface  FilterSearchInterface{
    method_like: string[] | null;
    material_like: string[] | null;
    status: string | null;
}


export interface SideBarPropInterface{
    onSideBar : boolean;
}

export interface checkboxPropInterface{
    value : string;
}

