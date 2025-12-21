// import { configureStore } from '@reduxjs/toolkit';
// import { createAction, createReducer } from '@reduxjs/toolkit';

// export const increment = createAction('myValue/increment');
// export const decrement = createAction('myValue/decrement');

// // Отобразить в консоль тип action
// // console.log(increment.toString());

// const myReducer = createReducer(0, builder => {
//   builder
//     .addCase(increment, (state, action) => state + action.payload)
//     .addCase(decrement, (state, action) => state - action.payload);
// });

// export const add = createAction('items/add');
// export const remove = createAction('items/remove');

// const itemsReducer = createReducer([], builder => {
//   builder
//     .addCase(add, (state, action) => state.push(action.payload))
//     .addCase(remove, (state, action) =>
//       state.filter(item => item.id !== action.payload),
//     );
// });

// export const store = configureStore({
//   reducer: {
//     myValue: myReducer,
//     items: itemsReducer,
//   },
// });

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger'; // для middleware
import { myValueSlice } from './myValue/slice';
import { itemsSlice } from './items/slice';
import { userSlice } from './user/slice';
import { clicksSlice } from './value/slice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedClicksReducer = persistReducer(
  persistConfig,
  clicksSlice.reducer,
);

export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
    items: itemsSlice.reducer,
    user: userSlice.reducer,
    clicks: persistedClicksReducer,
  },
  // Сначала установить npm i -D redux-logger
  // Для логирования action в консоль
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
});

export const persistor = persistStore(store);
