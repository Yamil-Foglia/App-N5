export interface IUser{
    id: number;
    email: string;
    pwd: string;
    role: string;
    gender: string;
}


export interface IMessage{
    message: string;
    user: string;
    curse: boolean;
}