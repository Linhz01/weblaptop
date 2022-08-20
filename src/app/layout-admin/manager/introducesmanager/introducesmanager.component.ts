import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Introduces } from 'src/app/model/introduces';
import { IntroducesServiceService } from 'src/app/service/introduces-service.service';
import * as DecoupledEditor from '@ckeditor/ckeditor5-angular';

@Component({
  selector: 'app-introducesmanager',
  templateUrl: './introducesmanager.component.html',
  styleUrls: ['./introducesmanager.component.css']
})

export class IntroducesmanagerComponent implements OnInit {
  public introduces: Introduces[];
  public Editor = DecoupledEditor;
  public editIntro: Introduces;
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
  
  public updateIntro(introduces: Introduces): void {
    this.introService.updateIntro(introduces).subscribe(
      (response: Introduces) => {
        console.log(response);
        this.getIntro();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteIntro(introduces: number): void {
    this.introService.deleteIntro(introduces).subscribe(
      (response: void) => {
        console.log(response);
        this.getIntro();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModalEdit(introduce: Introduces, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editIntro = introduce;
      button.setAttribute('data-target', '#updateIntroModal');

    }
    container.appendChild(button);
    button.click();
    
}

}
