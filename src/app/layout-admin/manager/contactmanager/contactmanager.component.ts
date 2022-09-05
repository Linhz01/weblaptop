import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Contacts } from 'src/app/model/contacts';
import { ContactServiceService } from 'src/app/service/contact-service.service';

@Component({
  selector: 'app-contactmanager',
  templateUrl: './contactmanager.component.html',
  styleUrls: ['./contactmanager.component.css']
})
export class ContactmanagerComponent implements OnInit {
  p: any;
  constructor(    private contactService: ContactServiceService) { 

  }
  contacts: Contacts[]
  ngOnInit(): void {
    this.getAll();
  }

  public getAll(): void {
    this.contactService.getAll().subscribe(
      (response: Contacts[]) => {
        this.contacts = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
