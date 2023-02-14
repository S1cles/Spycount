import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'


import {
    persistStore,
    persistReducer,

  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'

  const stripe = require('stripe')('sk_test_51MaoLeIJas7mhGBxDz0rEiWYPMWb9syjVh2HJHHQ9FfZk9zNz7zcTZvOknGTWBTYeu9GVfuJPgpKiYJlth3d9zIP00IbpmXULR');
 
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
  