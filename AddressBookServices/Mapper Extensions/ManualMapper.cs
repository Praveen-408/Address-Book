using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AddressBookServices.MapperExtensions
{
    public static class ManualMapper
    {
        //Maps Source Object of type 'S' to the Destination Object of type 'T'
        public static T ObjMap<S,T>(this S source)
        {
           return Mapper.Map<S,T>(source);
        }


        //Maps Source List of type 'S' to Destination List of type 'T'
        public static List<T>CollectionMap<S,T>(this List<S> source)
        {
            return Mapper.Map<List<S>,List<T>>(source);
        }

    }
}