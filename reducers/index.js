import { combineReducers } from 'redux';

import { persistStore, persistCombineReducers } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import userReducer from './user';

const config = {
    key: 'PeakPersistConfig',
    whitelist: ['user'],
    storage: AsyncStorage
};

const reducer = combineReducers({
    user : userReducer,
});

export default reducer;
