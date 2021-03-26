using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace Core.Entities
{
    public class ContentItem
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [BsonElement("name")]
        public string Name { get; set; }
        [BsonElement("value")]
        public decimal Value { get; set; }
        [BsonElement("category")]
        public string Category { get; set;}

        public override bool Equals(object obj)
        {
            if(obj is ContentItem)
            {
                var that = obj as ContentItem;
                return this.Id == that.Id && this.Name == that.Name && this.Value == that.Value && this.Category == that.Category;
            }
            return false;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Id, Name, Value, Category);
        }
    }
}
