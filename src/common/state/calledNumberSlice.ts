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
            state.values.push(action.payload);
        }
    }
});
export const { pushNextCalledNumber } = CalledNumbersSlice.actions;

export default CalledNumbersSlice.reducer;