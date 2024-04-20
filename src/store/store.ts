import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/common/state/counterSlice";
import calledNumberReducer from "@/common/state/calledNumberSlice";

export const store=configureStore({
    reducer:{counterReducer,calledNumberReducer}
});

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch= typeof store.dispatch;