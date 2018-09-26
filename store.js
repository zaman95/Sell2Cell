import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import reducer from './reducers'; //Import the reducer

const persistConfig = {
    key: 'root',
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, reducer)
  
  export default () => {
    let store = createStore(persistedReducer,undefined,applyMiddleware(thunk));
    let persistor = persistStore(store);
    return { store, persistor }
  }
  