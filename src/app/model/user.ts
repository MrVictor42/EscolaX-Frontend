export interface User {
    [prop: string]: any;

    id?: number | null;
    username?: string;
    name?: string;
    email?: string;
    avatar?: string;
    roles?: any[];
}