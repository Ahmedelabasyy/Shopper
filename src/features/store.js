import { configureStore , getDefaultMiddleware,combineReducers} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import appSlice from "./slice/appSlice";
import productSlice from "./slice/productsSlice";
import cartSlice  from "./slice/cartSlice";

const persistConfig = {
    key: "root",
    storage,
}


const rootReducer = combineReducers({
    app: appSlice,
    products: productSlice ,
    cart: cartSlice,
})
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

export const persistor = persistStore(store)