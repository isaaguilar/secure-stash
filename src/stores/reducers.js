import { combineReducers } from "redux"

import login from "./loginReducer"
import stash from "./stashReducer"

export default combineReducers({ login, stash })
