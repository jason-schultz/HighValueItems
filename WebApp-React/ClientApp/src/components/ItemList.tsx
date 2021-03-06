import React, { useEffect } from 'react'
import { ContentItem } from '../models/ContentItem'
//import Item from './Item'
import CategoryHeader from './CategoryHeader'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItems, selectItems } from '../state/contentItemSlice'

const ItemList = () => {

    const dispatch = useDispatch()
    const { items } = useSelector(selectItems)

    useEffect(() => {
        dispatch(fetchItems())
    }, [dispatch])

    /*
        Reduce the Array of items down to an object that contains the category as the key
        for the value which is an array of the items that belong to key (category)
    */
    const categories = items?.reduce((acc: {[key: string]: Array<ContentItem>}, curr: ContentItem) => {
        acc[curr.category] = acc[curr.category] || []
        acc[curr.category].push(curr)
        return acc
    }, Object.create(null))

   
    const renderResults = () => {
        return ( 
            <div className="">
                {(items && items.length > 0) ? 
                    Object.keys(categories).map(cat => (
                        <CategoryHeader key={cat} text={cat} items={categories[cat]} />
                    )) : (
                        <div>no items in the list</div>
                    )
                }
            </div>   
        )
    }

    let contents = items ? renderResults() : <p>Loading....</p>

    return (
        <div>
            {contents}
        </div>
    )
}

export default ItemList

/* <Box padding={4} maxHeight="400px" overflowY="auto">
                {items.length > 0 ? 
                /** Map over the keys of found in the categories object */
                    // Object.keys(categories).map(cat => (
                    //     <Box paddingBottom={3} key={cat}> 
                        /* Assign the key of the div/Box to be the category name, could also use the index of the map function 
 
                            <CategoryHeader key={cat} text={cat} items={categories[cat]} />
                            {categories[cat].map((data: ContentItem) => (
                                {/* 
                                    Iterate over each of the array items for the category, and pass the data object to 
                                    the Item component to display. Set the key to the id of the data object.
                                    Passing the onRemove function as well.
                                {/* <Item key={data.id} item={data} onRemove={onRemove} />
                            ))}
                        </Box>
                    )) : (
                        <div> 
                            {/* No items in the list?, display that message. 
                            {/* No items in list
                        </div>
                    )
                }
            </Box> 
            {/* <Box padding={4} borderTop="2px" borderColor="black">
                <CategoryHeader key='total' text="TOTAL:" items={items} />
            </Box> 
*/