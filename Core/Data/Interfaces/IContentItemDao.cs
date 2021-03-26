using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Core.Entities;
using MongoDB.Bson;

namespace Core.Data.Interfaces
{
    public interface IContentItemDao
    {
        IEnumerable<ContentItem> RetrieveAll();
        ContentItem Retrieve(string id);
        ContentItem Insert(ContentItem item);
        void Delete(ContentItem item);
        void Delete(string id);
    }
}
