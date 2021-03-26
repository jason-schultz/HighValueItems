using System;
using System.Collections.Generic;
using Core.Data.Interfaces;
using Core.Entities;
using Core.Logic.Interfaces;
using MongoDB.Bson;

namespace Core.Logic
{
    public class ContentItemLogic : IContentItemLogic 
    {
        private IContentItemDao _contentItemDao;
        public ContentItemLogic(IContentItemDao contentItemDao) 
        {
            _contentItemDao = contentItemDao;
        }

        public ContentItem ContentItemAdd(ContentItem item)
        {
            try
            {
                _contentItemDao.Insert(item);
                return item;
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public bool ContentItemDelete(string id)
        {
            try
            {
                _contentItemDao.Delete(id);
                return true;
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        public bool ContentItemDelete(ContentItem item) 
        {
            try
            {
                _contentItemDao.Delete(item);
                return true;
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public ContentItem ContentItemRetrieve(string id) => _contentItemDao.Retrieve(id);

        public IEnumerable<ContentItem> ContentItemRetrieveAll() => _contentItemDao.RetrieveAll();
    }
}