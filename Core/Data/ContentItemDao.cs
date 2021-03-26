using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

using Core.Data.Interfaces;
using Core.Entities;
using Microsoft.Extensions.Configuration;

namespace Core.Data
{
    public class ContentItemDao : IContentItemDao
    {
        private readonly IMongoCollection<ContentItem> _collection;
        private IDbSettings _settings;

        public ContentItemDao(IDbSettings dbSettings)
        {
            _settings = dbSettings;
            //var newConfig = new ConfigurationBuilder().AddJsonFile("appsettings.json", false).Build();
            var client = new MongoClient(_settings.ConnectionString);
            var database = client.GetDatabase(_settings.DatabaseName);
            _collection = database.GetCollection<ContentItem>(_settings.CollectionName);
        }

        public void Delete(ContentItem itemIn) => _collection.DeleteOne(item => item.Id == itemIn.Id);
        public void Delete(string id) => _collection.DeleteOne(item => item.Id == id);

        public ContentItem Retrieve(string id) => 
            _collection.Find(item => item.Id == id).FirstOrDefault();

        public IEnumerable<ContentItem> RetrieveAll() => _collection.Find(item => true).ToList();

        public ContentItem Insert(ContentItem item)
        {
            _collection.InsertOne(item);
            return item;
        }
    }
}
