import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import crudService from './crudService';

const initialState = {
    cruds: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''

}

//Create new goal
export const createCrud = createAsyncThunk('cruds/create', async (crudData, thunkAPI) => {
    try {
        return await crudService.createCrud(crudData)
    } catch (error) {
        const message = (
            error.response &&
            error.response.data &&
        error.response.data.message) ||
        error.message ||
        error.toString()
    
        return thunkAPI.rejectWithValue(message)
        
    }
})

export const crudSlice = createSlice({
    name: 'crud',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createCrud.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createCrud.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.cruds.push(action.payload)
            })
            .addCase(createCrud.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const {reset} = crudSlice.actions
export default crudSlice.reducer