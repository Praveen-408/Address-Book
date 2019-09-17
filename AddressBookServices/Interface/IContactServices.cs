using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ContactModels;

namespace AddressBookServices
{

    //Interface for Database Contact Services class (ContactDBServices)
    public interface IContactServices
    {
        List<Contact> GetAllContacts();

        Contact GetContact(int id);

        int AddContact(Contact contact);

        void UpdateContact(int id, Contact contact);

        void DeleteContact(int id);
    }
}
