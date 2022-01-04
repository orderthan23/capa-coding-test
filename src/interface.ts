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