import { Brands } from "./brands";
import { Categories } from "./categories";

export class Products {
    id: number;
    productname: string;
    price: number;
    cpu: string;
    harddrive: string;
    ram: string;
    feature: string;
    microprocessor: string;
    sonhan: number;
    soluong: number;
    capacity: string;
    information: string;
    imageproduct: string;
    categories: Categories;
    brands: Brands;
}