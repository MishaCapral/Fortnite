import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunkMiddleware } from "redux-thunk";

const reducers = combineReducers({
  //page:reducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store
export default store