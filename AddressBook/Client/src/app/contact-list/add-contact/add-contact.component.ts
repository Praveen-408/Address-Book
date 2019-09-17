import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../contact.service';
import { Contact } from '../../contact';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  selected_contact: Contact;
  contactform: FormGroup;

  constructor(private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private contactservice: ContactService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.selected_contact = new Contact();
  }

  ngOnInit(): void {
    this.initialiseFields();
    this.getContact();
    if (this.selected_contact != undefined)
      this.initialiseFields();
  }

  getContact(): void {
    this.activatedroute.params.subscribe(param => (this.selected_contact = this.contactservice.getContact(param['id'])));
  }

  initialiseFields(): void {
    this.contactform = this.fb.group(
      {
        id: new FormControl(this.selected_contact.id),
        name: new FormControl(this.selected_contact.name, Validators.required),
        email: new FormControl(this.selected_contact.email, [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
        mobile: new FormControl(this.selected_contact.mobile, [Validators.required, Validators.pattern('^[0-9]+'), Validators.minLength(10)]),
        landline: new FormControl(this.selected_contact.landline),
        website: new FormControl(this.selected_contact.website),
        address: new FormControl(this.selected_contact.address, Validators.required)
      }
    )
  }


  addContact(contact: Contact): void {
    this.contactservice.addContact(contact).toPromise().then(
      ContactId => {
        this.toastr.success('Added Successfully', 'Address Book'),
          contact.id = parseInt(ContactId),
          this.contactservice.addContactToArray(contact),
          this.router.navigate(['/']),
          console.log("Added Successfully");
      },
      error => { console.log("Error is " + error) }
    );
  }


  updateContact(contact: Contact): void {
    this.contactservice.updateContact(contact).subscribe(
      success => {
        console.log("Updated Successfully");
        this.toastr.success('Updated Successfully', 'Address Book');
        this.router.navigate(['/']);
      },
      error => { console.log("Error is " + error) }
    );
  }

  cancel(): void {
    this.router.navigate(['/']);
  }

  get name() {
    return this.contactform.get('name');
  }

  get email() {
    return this.contactform.get('email');
  }

  get mobile() {
    return this.contactform.get('mobile');
  }

  get address() {
    return this.contactform.get('address');
  }



}
