import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    userData: dataReducer,
});

export default rootReducer;