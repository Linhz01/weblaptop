import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Products } from 'src/app/model/products';

const baseUrl = 'http://localhost:8080/product/find';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private apiServerUrl = "http://localhost:8080";

  constructor(private http: HttpClient){}

  public getProduct(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.apiServerUrl}/product/all`);
  }

  public addProduct(products: Products): Observable<Products> {
    return this.http.post<Products>(`${this.apiServerUrl}/product/add`, products);
  }

  public updateProduct(products: Products): Observable<Products> {
    return this.http.put<Products>(`${this.apiServerUrl}/product/update`, products);
  }

  public deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/product/delete/${productId}`);
  }

  getProductByID(id: number): Observable<Products> {
    return this.http.get<Products>(`${this.apiServerUrl}/product/find/${id}`);
  }

  getProductByBrandID(brandID: any): Observable<Products[]> {
    return this.http.get<any>(`${this.apiServerUrl}/product/all/brand/${brandID}`);
  }

  getProductByCategoryID(categoryID: any): Observable<Products[]> {
    return this.http.get<any>(`${this.apiServerUrl}/product/all/category/${categoryID}`);
  }

  getProductByPrice(minP: any, maxP: any): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/product/all/price/${minP}/${maxP}`);
  }

  public get5ProductNew(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.apiServerUrl}/product/find6`);
  }

}

//   getAll(params: any): Observable<any> {
//     return this.http.get<any>(`${this.apiServerUrl}/product/`, { params });
//   }
// }

interface GetReponse{
  _embedded: {
    products: Products[];
  }
}
