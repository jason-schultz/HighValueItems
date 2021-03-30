export type ContentItem = {
        id: string
        name: string
        value: number
        category: string
}

export type ContentItemContextType = {
        items: Array<ContentItem>,
        saveItem: (item: ContentItem) => void
        deleteItem: (item: ContentItem) => void
        updateItem: (item: ContentItem) => void
}