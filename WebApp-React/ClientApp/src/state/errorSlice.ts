import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store/store"

interface IErrorState  {
    message: string
    display: boolean
}

const initialState: IErrorState = {
    message: '',
    display: false
}

export const errorSlice = createSlice({
    name: 'errors',
    initialState,
    reducers: {
        displayError: (state, action: PayloadAction<string>) => {
            state.display = true;
            state.message = action.payload
        },
        hideError: (state) => {
            state.display = false;
        }
    }
})


export const { displayError, hideError } = errorSlice.actions
export const selectError = (state: RootState) => state.error
export default errorSlice.reducer

