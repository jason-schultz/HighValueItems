import React, { ReactNode, useState } from 'react';
import { ContentItem, ContentItemContextType } from '../models/ContentItem';

export const ContentItemContext = React.createContext<ContentItemContextType | undefined>(undefined);

type ContentItemProviderProps = {
    children: React.ReactNode
}
const ContentItemProvider = (children: ReactNode) => {
    const [items, setItems] = useState<Array<ContentItem>>();

    const saveItem = (item: ContentItem) => {
        const newItem: ContentItem = {

        }

        setItems([...items, newItem])
    }

    const updateItem = (id: string) => {
        items.filter((x: ContentItem) => {
            if(x.id === id) {

            }
            setItems([...items])
        })
    }

    const deleteItem = (id: string) => {
        const newList = items.filter(x => x.id === id)
        setItems([...newList])
    }

    return (
        {children}
    )
}

export default ContentItemProvider