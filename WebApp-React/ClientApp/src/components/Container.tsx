import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import ContentItemProvider from '../contexts/contenItemContext'
// import { ContentItem } from '../models/ContentItem'
// import API from '../services/service'
import AddItem from './AddItem'
import ItemList from './ItemList'
//import ItemList from './ItemList'
import { fetchItems, selectItems } from '../state/contentItemSlice'

//const api = new API()

const Container = () => {
   
    //const { loading } = useSelector(selectLoading)
    //const [list, setList] = useState<{ items: Array<ContentItem>, loading: boolean}>({ items: [], loading: true})
    // const toast = useToast()

    return (
        // <ContentItemProvider>
        <>
            <AddItem></AddItem>
            <ItemList />
        </>
        // </ContentItemProvider>
        // <Box width="400" border="1px" borderColor="black">
        //     <AddItem addContentItem={handleAdd} />
        //     <ItemList items={list.items} loading={list.loading} onRemove={handleRemove} />
        // </Box>
    )
}

export default Container