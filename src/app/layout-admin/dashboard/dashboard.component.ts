import { Component, OnInit } from '@angular/core';
import{GoogleAnalyticsService} from '../../service/google-analytics.service';
import { Transactions } from 'src/app/model/transactions';
import { TransactionServiceService } from 'src/app/service/transaction-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public trans: Transactions[];
  public editTrans: Transactions;
  p: number = 1;

  constructor(
    private transactionService: TransactionServiceService,

  ) { }

  ngOnInit(): void {
    this.getTrans();
  }

  public getTrans(): void {
    this.transactionService.getTrans().subscribe(
      (response: Transactions[]) => {
        this.trans = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
