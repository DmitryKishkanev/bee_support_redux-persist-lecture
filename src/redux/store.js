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
import { createSlice } from '@reduxjs/toolkit';

const myValueSlice = createSlice({
  name: 'myValue',
  initialState: 0,
  reducers: {
    increment(state, action) {
      return state + action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    },
  },
});

export const { increment, decrement } = myValueSlice.actions;

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    add(state, action) {
      return state.push(action.payload);
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { add, remove } = itemsSlice.actions;

export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
    items: itemsSlice.reducer,
  },
});
