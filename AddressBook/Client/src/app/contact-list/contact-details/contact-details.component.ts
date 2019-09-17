import { Component, OnInit } from '@angular/core';
import { Contact } from '../../contact';
import {ActivatedRoute, Router} from '@angular/router';
import { ContactService } from '../../contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({  
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  selected_contact : Contact ;

   constructor(   
     private router: Router,
     private activatedroute: ActivatedRoute,
     private contactservice: ContactService,
     private toastr: ToastrService  ) { }
 
   ngOnInit(): void {
     this.getContact(); 
   } 
   
   getContact(): void {
      this.activatedroute.params.subscribe(param => (this.selected_contact = this.contactservice.getContact(param['id'])));
    }
 
   deleteContact(): void{
      this.contactservice.deleteContact(this.selected_contact.id).subscribe(
        success=>{
            this.toastr.success('Deleted Successfully','Address Book'),
            console.log("Deleted Successfully"),
            this.router.navigate(['/']);},
        error=>{console.log("Error is "+error)}
      );     
   }
 

}
