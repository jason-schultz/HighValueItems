import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ContentItem } from '../models/ContentItem'
import { get, post } from '../services/http'
import type { AppThunk, RootState } from '../store/store'
import { displayError } from './errorSlice'

//  Define a type for the slice state
interface ContentItemState {
    items: Array<ContentItem>,
    loading: string,
    error: any
}

//  Define the initial state useing the State Type
const initialState: ContentItemState = {
    items: [],
    loading: 'idle',
    error: null
} as ContentItemState

export const contentItemSlice = createSlice({
    name: 'contentItems',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        itemsLoading: (state) => {
            if(state.loading === 'idle')
                state.loading = 'pending'
        },
        loadContentItems: (state, action: PayloadAction<Array<ContentItem>>) => {
            if(state.loading === 'pending') {
                state.loading = 'idle'
                state.items = action.payload
            }
        },
        addContentItem: (state, action: PayloadAction<ContentItem>) => {
            state.items ? state.items.push(action.payload) : state.items = [action.payload]
        },
        deleteContentItem: (state, action: PayloadAction<string>) => {
            state.items = state.items?.filter(x => x.id !== action.payload)
        }
    }
})

export const fetchItems = (): AppThunk => async (dispatch) => {
    dispatch(itemsLoading())
    await get<Array<ContentItem>>('contentitem/items')
    .then(res => { 
        const data = res.parsedBody as Array<ContentItem>
        dispatch(loadContentItems(data))
    })
    .catch((err: Error) => dispatch(displayError(err.message)))
}

export const addItem = (item: ContentItem): AppThunk => async (dispatch) => {
    await post<ContentItem>('contentitem/item', item)
    .then(res => {
        const newItem = res.parsedBody as ContentItem
        dispatch(addContentItem(newItem))
    })
    .catch((err: Error) => dispatch(displayError(err.message)))
}

export const { itemsLoading, loadContentItems, addContentItem, deleteContentItem } = contentItemSlice.actions
export const selectItems = (state: RootState) => state.items
//export const selectLoading = (state: RootState) => state.items.loading
export default contentItemSlice.reducer