import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Transactions } from 'src/app/model/transactions';
import { TransactionServiceService } from 'src/app/service/transaction-service.service';

@Component({
  selector: 'app-transactionmanager',
  templateUrl: './transactionmanager.component.html',
  styleUrls: ['./transactionmanager.component.css']
})
export class TransactionmanagerComponent implements OnInit {
  public trans: Transactions[];
  public editTrans: Transactions;
  p: number = 1;

  constructor(
    private transactionService: TransactionServiceService,

  ) { }

  ngOnInit(
  ): void {
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

  public onUpdateTrans(trans: Transactions): void {
    this.transactionService.updateTrans(trans).subscribe(
      (response: Transactions) => {
        console.log(response);
        this.getTrans();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  public onOpenModalEdit(transactions: Transactions, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editTrans = transactions;
      button.setAttribute('data-target', '#update');
    }

    container.appendChild(button);
    button.click();
    
}

}

