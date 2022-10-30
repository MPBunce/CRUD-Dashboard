import {createSlice, createAsyncThuink} from '@reduxjs/toolkit';

const initalState = {
    cruds: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''

}

export const crudSlice = createSlice({
    name: 'crud',
    initialState,
    reducers: {
        reset: (state) => initalState
    }
})

export const {reset} = crudSlice.actions
export default crudSlice.reducer