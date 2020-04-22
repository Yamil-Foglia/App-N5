import { Helpers } from '../core/helpers';

export class Message {

    public idFirebase: string;
    public message: string;
    public user: string;
    public curse: boolean;
    public date: string;

    constructor(){}

    public static create(message: string, user: string, curse: boolean): Message {
        let mes = new Message();
        mes.message = message;
        mes.user = user;
        mes.curse = curse;
        mes.date = Helpers.dateOfString();
        
        return mes;
    }


}
