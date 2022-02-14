import {combineReducers} from "redux";
import authReducer from '../auth/auth.reducer'
import { connectRouter } from "connected-react-router";

// const createRootReducer = (history)=> combineReducers({
//     router : connectRouter(history),
//     authReducer
// });
export default history => combineReducers({
    router: connectRouter(history),
    authReducer,
    // dashboard
});
// export default createRootReducer;