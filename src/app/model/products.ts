import { Brands } from "./brands";
import { Categories } from "./categories";

export interface Products {
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
    category_id: Categories;
    brand_id: Brands;
}
