import React, { useCallback, useEffect, useState } from 'react'
import { ContentItem } from '../models/ContentItem'
import API from '../services/service'
import AddItem from './AddItem'
import ItemList from './ItemList'

//const api = new API()

const Container = () => {
    const [list, setList] = useState<{ items: Array<ContentItem>, loading: boolean}>({ items: [], loading: true})
    const toast = useToast()

    useEffect(() => {
        new API().get('contentitem/items').then(res => setList({items: res, loading: false}))
    }, [])

    const handleAdd = useCallback((item: ContentItem) => {
        new API().post('contentitem/item', item)
            .then(res => {
                if(!res.ok) throw new Error(res.statusText)
                else return res.json()
            }).then((data: ContentItem) => {
                //  Add worked, add the item returned from server to the list
                setList({ items: [...list.items, data], loading: false})
                toast({
                    position: "top",
                    title: "Item Added",
                    description: `Added ${data.name} successfully!`,
                    status: 'success',
                    duration: 5000,
                    isClosable: true
                })
            }).catch(error => {
                toast({
                    position: "top",
                    title: "Error",
                    description: `The following error occured: ${error}`,
                    status: 'error',
                    duration: 5000,
                    isClosable: true
                })
            })
    }, [list.items, toast])

    const handleRemove = useCallback((item: ContentItem) => {
        new API().delete('contentitem/item/' + item.id)
        .then(res => {
            if(!res.ok) throw new Error(res.statusText)
            else return res.json()
        }).then(() => {
            //  Delete worked, use the item that we passed into the function to remove it
            //  from the list
            const newList = list.items.filter((x) => x.id !== item.id);
            setList({...list, items: newList })
        }).catch(error => {
            toast({
                position: "top",
                title: "Error",
                description: `The following error occured: ${error}`,
                status: 'error',
                duration: 5000,
                isClosable: true
            })
        })
    }, [list, toast])


    return (
        <Box width="400" border="1px" borderColor="black">
            <AddItem addContentItem={handleAdd} />
            <ItemList items={list.items} loading={list.loading} onRemove={handleRemove} />
        </Box>
    )
}

export default Container