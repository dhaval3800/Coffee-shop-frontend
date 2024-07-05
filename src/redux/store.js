// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { authReducer } from './features/auth/authSlice';
import { shopReducer } from './features/shop/shopSlice';
import { shopDetailsReducer } from './features/shopDetails/shopDetailsSlice';
import { combineReducers } from 'redux';
import { cartReducer } from './features/cart/cartSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth','cart'], // only auth will be persisted
};

const rootReducer = combineReducers({
  auth: authReducer,
  shops: shopReducer,
  shopDetails: shopDetailsReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
