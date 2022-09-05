import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Contacts } from 'src/app/model/contacts';
import { Users } from 'src/app/model/users';
import { ContactServiceService } from 'src/app/service/contact-service.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})



export class ContactsComponent implements OnInit {
  isLoggedIn = false;
  username?: string;
  email?: string;
  name?: string;
  address?: string;
  phone?: number;
  public users: Users;
  public contact: Contacts[];
  today: any;
  currentDate = new Date();

  constructor(
    private contactService: ContactServiceService,
    private tokenStorageService: TokenStorageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
      this.email = user.email;
      this.name = user.name;
      this.address = user.address;
      this.phone = user.phone;
    }
  }



  public getContact(): void {
    this.contactService.getAll().subscribe(
      (response: Contacts[]) => {
        this.contact = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public send(addForm: NgForm): void {
    this.contactService.addC(addForm.value).subscribe(
      (response: Contacts) => {
        console.log(response);
        addForm.reset();
        window.alert('Đã gửi, vui lòng chờ đợi phản hồi');
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        
      }
    );
  }

  

  
  
}
