import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brands } from '../model/brands';

@Injectable({
  providedIn: 'root'
})
export class BrandServiceService {
  private apiServerUrl = "http://localhost:8080";

  constructor(private http: HttpClient){}

  public getBrand(): Observable<Brands[]> {
    return this.http.get<Brands[]>(`${this.apiServerUrl}/brand/all`);
  }

  public adtBrand(brands: Brands): Observable<Brands> {
    return this.http.post<Brands>(`${this.apiServerUrl}/brand/add`, brands);
  }

  public updattBrand(brands: Brands): Observable<Brands> {
    return this.http.put<Brands>(`${this.apiServerUrl}/brand/update`, brands);
  }

  public delettBrand(categoryID: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/brand/delete/${categoryID}`);
    
  }
}
