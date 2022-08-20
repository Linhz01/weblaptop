import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from '../model/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  private apiServerUrl = "http://localhost:8080";

  constructor(private http: HttpClient){}

  public getCategory(): Observable<Categories[]> {
    return this.http.get<Categories[]>(`${this.apiServerUrl}/category/all`);
  }

  public adtCategory(categories: Categories): Observable<Categories> {
    return this.http.post<Categories>(`${this.apiServerUrl}/category/add`, categories);
  }

  public updattCategory(categories: Categories): Observable<Categories> {
    return this.http.put<Categories>(`${this.apiServerUrl}/category/update`, categories);
  }

  // updateEmployee(id: number, value: any): Observable<Object> {
  //   return this.http.put(`${this.apiServerUrl}/category/update/${id}`, value);
  // }

  public delettCategory(categoryID: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/category/delete/${categoryID}`);
  }

  public getCategoryByID(id: number): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/category/find/${id}`);
  }

}
