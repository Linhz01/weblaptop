import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CateNews } from '../model/catenews';
import { News } from '../model/news';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  private apiServerUrl = "http://localhost:8080";

  constructor(private http: HttpClient){}

  public getNew(): Observable<News[]> {
    return this.http.get<News[]>(`${this.apiServerUrl}/new/all`);
  }

  public addNew(News: News): Observable<News> {
    return this.http.post<News>(`${this.apiServerUrl}/new/add`, News);
  }

  public updateNew(News: News): Observable<News> {
    return this.http.put<News>(`${this.apiServerUrl}/new/update`, News);
  }

  public deleteNew(newID: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/new/delete/${newID}`);
  }

  public getNewByID(newID: number): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/new/find/${newID}`);
  }
  
  //category 
  public getCategoryNew(): Observable<CateNews[]> {
    return this.http.get<CateNews[]>(`${this.apiServerUrl}/new/category/all`);
  }

  public addCategoryNew(CateNews: CateNews): Observable<CateNews> {
    return this.http.post<CateNews>(`${this.apiServerUrl}/new/category/add`, CateNews);
  }

  public updateCategoryNew(CateNews: CateNews): Observable<CateNews> {
    return this.http.put<CateNews>(`${this.apiServerUrl}/new/category/update`, CateNews);
  }

  public deleteCategoryNew(cateNewID: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/new/category/delete/${cateNewID}`);
  }

  public getCategoryNewByID(cateNewID: number): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/new/category/find/${cateNewID}`);
  }
}
