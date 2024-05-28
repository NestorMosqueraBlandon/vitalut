import { Base } from "../../../common";

export interface User extends Base {
    name: string;
    lastname: string;
    email: string;
    photo: string;
    lastLogin: string;
}