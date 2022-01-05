import {FilterInterface} from "./interface";

export const defaultFilter: FilterInterface = {
    material: [],
    method: [],
    status: "",
};


export const METHODES: string[] = ["밀링", "선반"];
export const MATERIALS: string[] = ["알루미늄", "탄소강", "구리", "합금강", "강철"];
export const COUNSELING: string = "상담중";
export const UNMARKED: string = "미표기";

export const METHOD_NAME: string = "method";
export const MATERIAL_NAME: string = "material";
export const STATUS_NAME: string = "status";

export const METHOD_KR: string = "가공방식";
export const MATERIAL_KR: string = "재료";
