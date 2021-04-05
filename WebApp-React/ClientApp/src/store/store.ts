import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import contentItemReducer from '../state/contentItemSlice'
import errorReducer from '../state/errorSlice'


export const store = configureStore({
    reducer: {
        items: contentItemReducer,
        error: errorReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
