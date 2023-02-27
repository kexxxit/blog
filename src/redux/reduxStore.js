import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import postsReducer from "./reducers/postsReducer";
import authReducer from "./reducers/authReducer";

let reducers = combineReducers({
    postsPage: postsReducer,
    authPage: authReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

export default store