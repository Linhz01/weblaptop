import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/model/users';
import { UserService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-usermanager',
  templateUrl: './usermanager.component.html',
  styleUrls: ['./usermanager.component.css']
})
export class UsermanagerComponent implements OnInit {
  public users: Users[];
  constructor(private userServie: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  public getUser(): void {
    this.userServie.getUser().subscribe(
      (response: Users[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
