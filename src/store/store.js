// import { configureStore } from "@reduxjs/toolkit";
// import { reducer } from "./toDos/toDos";
// import { emojiApi } from "./emoji/emojiApi.js";

// const rootReducer = {
//     toDoReducer: reducer,
//     [emojiApi.reducerPath]: emojiApi.reducer,
// };

// export const store = configureStore({
//     reducer
// });

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import { reducer } from "./toDos/toDos";
import { emojiApi } from "./emoji/emojiApi";

const rootReducer = combineReducers({
    toolkit: reducer,
    emojiApi: emojiApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(emojiApi.middleware),
});

setupListeners(store.dispatch);
