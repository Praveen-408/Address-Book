import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import {Contact} from '../contact';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contactlist : Contact[]=[];

  constructor(private contactservice : ContactService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts(): void {
    this.contactservice.loadContacts().then(
    abc=> this.contactservice.getContacts().subscribe(contactlist=> this.contactlist = contactlist));
  }

}
