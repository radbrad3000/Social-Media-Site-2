import { combineReducers } from "@reduxjs/toolkit";

import userSlice from "./postSlice.js"
import themeSlice from "./theme"
import postSlice from "./postSlice.js"

const rootReducer = combineReducers({
    user: userSlice,
    theme: themeSlice,
    post: postSlice
})

export { rootReducer };