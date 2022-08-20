import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transactions } from '../model/transactions';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {
  private apiServerUrl = "http://localhost:8080";

  constructor(private http: HttpClient){}

  public getTrans(): Observable<Transactions[]> {
    return this.http.get<Transactions[]>(`${this.apiServerUrl}/transaction/all`);
  }

  public addTrans(transactions: Transactions): Observable<Transactions> {
    return this.http.post<Transactions>(`${this.apiServerUrl}/transaction/add`, transactions);
  }

  public updateTrans(transactions: Transactions): Observable<Transactions> {
    return this.http.put<Transactions>(`${this.apiServerUrl}/transaction/update`, transactions);
  }

  // updateEmployee(id: number, value: any): Observable<Object> {
  //   return this.http.put(`${this.apiServerUrl}/transaction/update/${id}`, value);
  // }

  public deleteTrans(transactionID: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/transaction/delete/${transactionID}`);
  }


}
