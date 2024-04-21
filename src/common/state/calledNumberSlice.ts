import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CalledNumbersState {
    values: Array<number>;
}

const initialState: CalledNumbersState = {
    values: []
}

const CalledNumbersSlice = createSlice({
    name: "callednumbers",
    initialState,
    reducers: {
        pushNextCalledNumber: (state, action: PayloadAction<number>) => {
            if(state.values.indexOf(action.payload)==-1){
                state.values.push(action.payload);
            }else{
                console.error(state.values +" is already called previously");
            }
            
        }
    }
});
export const { pushNextCalledNumber } = CalledNumbersSlice.actions;

export default CalledNumbersSlice.reducer;