using AddressBookServices;
using ContactModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace AddressBook.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class ContactController : ApiController
    {
        //Registering the Services Injector 

        private readonly IContactServices _ContactDBServices;

        public ContactController(IContactServices services)
        {
           this._ContactDBServices = services;
        }


        //Returns entire Contact List

        [HttpGet]
        [Route("GetAllContacts")]
        public List<Contact> GetAllContacts()
        {
            return this._ContactDBServices.GetAllContacts();
        }


        //Returns a single Contact based on given id

        [HttpGet]
        [Route("GetContact/{id}")]
        public Contact GetContact(int id)
        {
            return this._ContactDBServices.GetContact(id);
        }


        //Add a new Contact to the database and returns it id

        [HttpPost]
        [Route("AddContact")]
        public int AddContact([FromBody] Contact contact)
        {
            return this._ContactDBServices.AddContact(contact);
        }
        

        //Updates the Contact object in database based on id   

        [HttpPut]
        [Route("UpdateContact/{id}")]
        public void UpdateContact(int id, [FromBody]Contact contact)
        {
            this._ContactDBServices.UpdateContact(id, contact);
        }


        //Deletes a Contact by taking id as input 

        [HttpDelete]
        [Route("DeleteContact/{id}")]
        public void DeleteContact(int id)
        {
            this._ContactDBServices.DeleteContact(id);
        }

    }
}
