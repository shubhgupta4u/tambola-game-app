import { configureStore } from "@reduxjs/toolkit";
import calledNumberReducer from "@/common/state/calledNumberSlice";

export const store=configureStore({
    reducer:{calledNumberReducer}
});

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch= typeof store.dispatch;