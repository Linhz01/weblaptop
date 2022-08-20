import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Introduces } from 'src/app/model/introduces';
import { IntroducesServiceService } from 'src/app/service/introduces-service.service';

@Component({
  selector: 'app-introduces',
  templateUrl: './introduces.component.html',
  styleUrls: ['./introduces.component.css']
})
export class IntroducesComponent implements OnInit {
  public introduces: Introduces[];
  constructor(
    private introService: IntroducesServiceService,
  ) { }

  ngOnInit(): void {
    this.getIntro();
  }

  public getIntro(): void {
    this.introService.getIntro().subscribe(
      (response: Introduces[]) => {
        this.introduces = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
