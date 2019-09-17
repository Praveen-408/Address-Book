import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Contact} from './contact';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http : HttpClient) { }

  private  ContactsArray : Contact[] = [];

  readonly url = 'https://localhost:44391/';

  idcount : number ;
  
  getContacts(): Observable<Contact[]> {
      this.idcount=this.ContactsArray.length+1;
      return  of(this.ContactsArray);
  }

  async loadContacts(): Promise<any>{
      await this.http.get<Contact[]>(this.url+'GetAllContacts').toPromise().then(
      contacts=> {this.ContactsArray= contacts});
      return ;
  }

  getContact(id: any): Contact {
    return (this.ContactsArray.find(Contacts=> Contacts.id == id)); 
  }

  addContact(contact : Contact) : Observable<any> {   
    return this.http.post(this.url+'AddContact',contact);
  }

  addContactToArray(contact : Contact) {
    this.ContactsArray.push(contact);
  }

  updateContact(contact: Contact)   {
    const index =this.ContactsArray.findIndex(c=> c.id ==contact.id);
    this.ContactsArray[index]=contact;
    return this.http.put(this.url+'UpdateContact/'+contact.id,contact);
  }

  deleteContact(id: number)
  {
    const index =this.ContactsArray.findIndex(c=> c.id ==id);
    this.ContactsArray.splice(index,1);
    return this.http.delete(this.url+'DeleteContact/'+id);
  }


}
