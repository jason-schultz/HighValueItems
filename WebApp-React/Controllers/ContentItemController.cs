using Microsoft.AspNetCore.Mvc;
using Core.Entities;
using Core.Logic.Interfaces;
using Microsoft.Extensions.Configuration;

namespace nude_assignment.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContentItemController : ControllerBase
    {
        private IContentItemLogic _itemLogic;
        public ContentItemController(IContentItemLogic itemLogic)
        {
            _itemLogic = itemLogic;
        }

        [HttpPost]
        [Route("item")]
        public IActionResult ContentItemAdd(ContentItem item)
        {
            var result = _itemLogic.ContentItemAdd(item);

            return Ok(result);
        }

        [HttpDelete]
        [Route("item/{id}")]
        public IActionResult ContentItemDelete(string id)
        {
            //var objectId = ObjectId.Parse(id);
            var itemToDelete = _itemLogic.ContentItemRetrieve(id);
            if(null == itemToDelete)
                return NotFound();

            var result = _itemLogic.ContentItemDelete(itemToDelete);

            return Ok(result);
        }

        [HttpGet]
        [Route("items")]
        public IActionResult ContenItemsRetrieveAll()
        {
            var result = _itemLogic.ContentItemRetrieveAll();

            return Ok(result);
        }
    }
}