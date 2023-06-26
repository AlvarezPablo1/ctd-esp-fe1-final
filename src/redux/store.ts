import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./slices/characterReducer";
import detailReducer from "./slices/detailReducer";


const store = configureStore({
  reducer: {
      characters: characterReducer,
      detail: detailReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;