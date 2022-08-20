import { EmailValidator } from "@angular/forms";

export class Transactions {
    id: number;
    fullname: string;
    phone: number;
    email: EmailValidator;
    address: string;
    datetime: Date;
    total: number;
    status: string;
    note: string;
    
}
