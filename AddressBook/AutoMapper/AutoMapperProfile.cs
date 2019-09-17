using AddressBookConnection;
using AutoMapper;
using ContactModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AddressBook
{
    //Creating AutoMapper Profile
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<DBContact, Contact>().ReverseMap();
        }

        [Obsolete]
        public static void Run()
        {
            Mapper.Initialize(a => a.AddProfile<AutoMapperProfile>()); 
        }
    }
}