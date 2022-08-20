import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Introduces } from '../model/introduces';

@Injectable({
  providedIn: 'root'
})
export class IntroducesServiceService {
  private apiServerUrl = "http://localhost:8080";

  constructor(private http: HttpClient){}

  public getIntro(): Observable<Introduces[]> {
    return this.http.get<Introduces[]>(`${this.apiServerUrl}/introduces/all`);
  }

  public updateIntro(categories: Introduces): Observable<Introduces> {
    return this.http.put<Introduces>(`${this.apiServerUrl}/introduces/update`, categories);
  }

  public deleteIntro(categoryID: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/introduces/delete/${categoryID}`);
  }


}
