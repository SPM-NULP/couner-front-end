import { configureStore, combineReducers } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth/auth-slice';
import { userReducer } from './user/user-slice';
import { deviceReducer } from './device-controller/device-slice'
import { displayReducer } from './displays-controller/display-slice'

const persistConfig = {
  key: 'root',
  storage: storage,
};

const userPersistConfig = {
  key: 'user',
  storage,
};

const devicePersistConfig = {
  key: 'device',
  storage,
};

const displayPersistConfig = {
  key: 'display',
  storage,
}

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  user: persistReducer(userPersistConfig, userReducer),
  device: persistReducer(devicePersistConfig, deviceReducer),
  display: persistReducer(displayPersistConfig, displayReducer)
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);