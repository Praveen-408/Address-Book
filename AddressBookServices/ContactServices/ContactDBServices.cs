using AddressBookConnection;
using ContactModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AddressBookServices.MapperExtensions;

namespace AddressBookServices
{
    public class ContactDBServices : IContactServices
    {
        //Creating AddressBook Database Instance
        private readonly AddressBookConnectionDB DBObj;

        public ContactDBServices()
        {
            DBObj = new AddressBookConnectionDB();
        }


        //Returns list of Contacts
        public List<Contact> GetAllContacts()
        {
            return DBObj.Fetch<DBContact>(string.Empty).CollectionMap<DBContact, Contact>();
        }


        //Returns a single Contact from given id 
        public Contact GetContact(int id)
        {
            return DBObj.Single<DBContact>(id).ObjMap<DBContact, Contact>();
        }


        //Add a new Contact into database and returns its id
        public int AddContact(Contact contact)
        {
            var id = DBObj.Insert(ManualMapper.ObjMap<Contact, DBContact>(contact));

            return (int)id;
        }


        //Update the existing contact in the database
        public void UpdateContact(int id, Contact contact)
        {
            DBObj.Update(ManualMapper.ObjMap<Contact, DBContact>(contact),id);
        }


        //Deletes a Contact based on id passed
        public void DeleteContact(int id)
        {
            DBObj.Delete<DBContact>(id);
        }

    }
}
