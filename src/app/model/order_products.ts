import { Products } from "./products";
import { Transactions } from "./transactions";

export class OrderProducts{
    id: number;
    amount: number;
    price: number;
    status: string;
    products: Products;
    transaction: Transactions;
}