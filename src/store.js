import { configureStore } from "@reduxjs/toolkit";

const reducerFn = (state = { userName: "Rajababu Shah" }, action) => {
    switch (action.type) {
        case 'addName':
            return { userName: action.payload };
        default:
            return { userName: state.userName };
    }
}

const store = configureStore({ reducer: reducerFn });
export default store;