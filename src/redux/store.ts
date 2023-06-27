import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./slices/characterReducer";
import detailReducer from "./slices/detailReducer";
import favoriteReducer from "./slices/favoriteReducer";


const store = configureStore({
  reducer: {
      characters: characterReducer,
      detail: detailReducer,
      favorite: favoriteReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;