import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacts } from '../model/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  private apiServerUrl = "http://localhost:8080";

  constructor(private http: HttpClient){}

  public getAll(): Observable<Contacts[]> {
    return this.http.get<Contacts[]>(`${this.apiServerUrl}/contact/all`);
  }

  public addC(Contacts: Contacts): Observable<Contacts> {
    return this.http.post<Contacts>(`${this.apiServerUrl}/contact/add`, Contacts);
  }

  public updateC(Contacts: Contacts): Observable<Contacts> {
    return this.http.put<Contacts>(`${this.apiServerUrl}/contact/update`, Contacts);
  }

}