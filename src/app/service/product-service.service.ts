import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Products } from 'src/app/model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private apiServerUrl = 'http://localhost:8080';

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

  public getProductByID(productId: number): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/product/find/${productId}`);
  }
}
