import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/model/news';
import { NewsServiceService } from 'src/app/service/news-service.service';

@Component({
  selector: 'app-newmanager',
  templateUrl: './newmanager.component.html',
  styleUrls: ['./newmanager.component.css']
})
export class NewmanagerComponent implements OnInit {
  p: number = 1;
  public news: News[];
  constructor(
    private newService: NewsServiceService
  ) { }

  ngOnInit(): void {
    this.getNew();
  }

  public getNew(): void {
    this.newService.getNew().subscribe(
      (response: News[]) => {
        this.news = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
