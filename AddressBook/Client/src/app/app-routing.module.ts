import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContactComponent } from './contact-list/add-contact/add-contact.component';
import { ContactDetailsComponent } from './contact-list/contact-details/contact-details.component';
import { ContactListComponent } from './contact-list/contact-list.component';

const routes: Routes = [
  { 
    path: 'contactlist',
    component: ContactListComponent,
    children:[
      { path: 'display/:id', component: ContactDetailsComponent },
      { path: 'edit/contact/:id', component: AddContactComponent},
      {path : 'add/contact',component: AddContactComponent}
    ]
  },
  { path:'**' , redirectTo: '/contactlist' , pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
