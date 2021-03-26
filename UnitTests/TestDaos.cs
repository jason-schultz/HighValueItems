using Microsoft.VisualStudio.TestTools.UnitTesting;
using Core.Data;
using Core.Entities;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Moq;
using MongoDB.Driver;

namespace UnitTests
{
    [TestClass]
    public class TestDaos
    {
        private Mock<IOptions<DbSettings>> _mockOptions;
        private Mock<IMongoDatabase> _mockDb;
        private Mock<IMongoClient> _mockClient;

        private DbSettings _settings;

        public void Setup()
        {
            _mockOptions = new Mock<IOptions<DbSettings>>();
            _mockDb = new Mock<IMongoDatabase>();
            _mockClient = new Mock<IMongoClient>();

            _settings = new DbSettings()
            {
                ConnectionString = "mongodb://localhost:27017/TestDB --username admin",
                DatabaseName = "TestDB",
                CollectionName = "Tests"
            };
        }

        [TestMethod]
        public void ShouldCreateDatabaseObject()
        {
            Setup();
            _mockOptions.Setup(s => s.Value).Returns(_settings);
            _mockClient.Setup(c => c.GetDatabase(_mockOptions.Object.Value.DatabaseName, null)).Returns(_mockDb.Object);

            //  Act
            var context = new MongoDbContext(_mockOptions.Object);
            Assert.IsNotNull(context);
        }

        [TestMethod]
        public void ShouldInsertOneItem()
        {
            var item = new ContentItem
            {
                Name = "TV",
                Value = 200,
                Category = "Electronics"
            };

            Setup();
            _mockOptions.Setup(s => s.Value).Returns(_settings);
            _mockClient.Setup(c => c.GetDatabase(_mockOptions.Object.Value.DatabaseName, null)).Returns(_mockDb.Object);

            var context = new MongoDbContext(_mockOptions.Object);

            var dao = new ContentItemDao(_settings);

            dao.Insert(item);
            var newItem = dao.Retrieve(item.Id);
            Assert.AreEqual(item, newItem);


            //GetAppConfig();
            //var dao = new ContentItemDao(configuration.GetSection("DbSettings") as DbSettings);
            //dao.Insert(item);

            //var newItem = dao.Retrieve(item.Id);
            //dao.Delete(item.Id);

            //Assert.AreEqual(item, newItem);
        }

        [TestMethod]
        public void ShouldRemoveOneItem()
        {
            var item = new ContentItem
            {
                Name = "TV",
                Value = 200,
                Category = "Electronics"
            };

            Setup();
            _mockOptions.Setup(s => s.Value).Returns(_settings);
            _mockClient.Setup(c => c.GetDatabase(_mockOptions.Object.Value.DatabaseName, null)).Returns(_mockDb.Object);

            var context = new MongoDbContext(_mockOptions.Object);

            var dao = new ContentItemDao(_settings);
            dao.Insert(item);
            dao.Delete(item.Id);

            var newItem = dao.Retrieve(item.Id);

            Assert.IsNull(newItem);
        }

        [TestMethod]
        public void ChangeValueItemsShouldntBeEqual()
        {
            var item = new ContentItem
            {
                Name = "TV",
                Value = 200,
                Category = "Electronics"
            };

            Setup();
            _mockOptions.Setup(s => s.Value).Returns(_settings);
            _mockClient.Setup(c => c.GetDatabase(_mockOptions.Object.Value.DatabaseName, null)).Returns(_mockDb.Object);

            var context = new MongoDbContext(_mockOptions.Object);

            var dao = new ContentItemDao(_settings);
            dao.Insert(item);

            var newItem = dao.Retrieve(item.Id);

            dao.Delete(item.Id);

            newItem.Value = 300;

            Assert.AreNotEqual(item, newItem);
        }
    }
}
