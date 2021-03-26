using Core.Data;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace UnitTests
{
    public class MongoDbContext 
    {
        private IMongoDatabase _db { get; set; }
        private MongoClient _client { get; set; }
        public IClientSessionHandle Session { get; set; }

        public MongoDbContext(IOptions<DbSettings> config)
        {
            _client = new MongoClient(config.Value.ConnectionString);
            _db = _client.GetDatabase(config.Value.DatabaseName);
        }

        public IMongoCollection<T> GetCollection<T>(string name)
        {
            if (string.IsNullOrEmpty(name))
                return null;
            return _db.GetCollection<T>(name);
        }
    }
}
