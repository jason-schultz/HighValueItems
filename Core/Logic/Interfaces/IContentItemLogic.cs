using System.Collections.Generic;
using Core.Entities;
using MongoDB.Bson;

namespace Core.Logic.Interfaces 
{
    public interface IContentItemLogic 
    {
        ContentItem ContentItemAdd(ContentItem item);
        bool ContentItemDelete(ContentItem item);
        bool ContentItemDelete(string id);
        IEnumerable<ContentItem> ContentItemRetrieveAll();
        ContentItem ContentItemRetrieve(string id);
    }
}