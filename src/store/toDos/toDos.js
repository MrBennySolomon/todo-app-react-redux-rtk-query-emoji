import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toDos: localStorage.getItem("toDos")
        ? JSON.parse(localStorage.getItem("toDos"))
        : [],
};

const updateLocalStorage = (toDos) => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
};

export const toDoSlice = createSlice({
    name: "toDos",
    initialState,
    reducers: {
        createToDo: (state, action) => {
            state.toDos.push(action.payload);
            updateLocalStorage(state.toDos);
        },
        deleteToDo: (state, action) => {
            state.toDos = state.toDos.filter((toDo) => toDo !== action.payload);
            updateLocalStorage(state.toDos);
        },
    },
});

export const toDoSelector = {
    getToDo: (state) => state.toDos,
};

export const { actions, reducer } = toDoSlice;
