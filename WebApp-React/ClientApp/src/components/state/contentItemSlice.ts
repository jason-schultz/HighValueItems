import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ContentItem } from '../../models/ContentItem'
import API from '../../services/service'
import type { AppThunk, RootState } from '../../store/store'

//  Define a type for the slice state
interface ContentItemState {
    items: Array<ContentItem>,
    loading: string
}

//  Define the initial state useing the State Type
const initialState: ContentItemState = {
    items: [],
    loading: 'idle'
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
            state.items.push(action.payload)
        },
        deleteContentItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(x => x.id !== action.payload)
        }
    }
})

const api = new API()

export const fetchItems = (): AppThunk => async (dispatch) => {
    dispatch(itemsLoading())
    const response = await api.get('contentitem/items')
    dispatch(loadContentItems(response))
}

export const addItem = (item: ContentItem): AppThunk => async (dispatch) => {
    const response = await api.post('contentitem/item', item)
    var newItem = response
    dispatch(addContentItem(newItem))
    // dispatch(addContentItem(response.json()))
}

export const { itemsLoading, loadContentItems, addContentItem, deleteContentItem } = contentItemSlice.actions
export const selectItems = (state: RootState) => state.items
//export const selectLoading = (state: RootState) => state.items.loading
export default contentItemSlice.reducer