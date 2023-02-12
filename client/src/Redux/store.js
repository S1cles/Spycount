import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'


import {
    persistStore,
    persistReducer,

  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
  
  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, cartReducer)
  
 export const store = configureStore({
   reducer:{cart:persistedReducer}
    
  })
  
 export let persistor = persistStore(store)
  