import React from "react";

//들어온 요청
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

export interface FilterSearchInterface {
    method_like: string[] | null;
    material_like: string[] | null;
    status: string | null;
}


export interface SideBarPropInterface {
    onSideBar: boolean;
}

export interface CheckboxPropInterface {
    value: string;
    name: string;
}

export interface DropDownBoxPropInterface {
    options: DropDownBoxInterface;
}

export interface DropDownBoxInterface {
    choiceRef: React.RefObject<HTMLDivElement>;
    selector: boolean;
    setSelector: React.Dispatch<React.SetStateAction<boolean>>;
    optionKr: string;
    list: string[];
    optionType: string[];
    name: string;
}