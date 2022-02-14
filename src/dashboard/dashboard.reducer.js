import { DASHBOARD_LOAD_ATTEMPTED, DASHBOARD_LOAD_SUCCESSFUL, DASHBOARD_LOAD_FAILED } from "./dashboard.actions";

 const initialState = {
     dashBoardData = unddefined,
 }

 export default function (state = initialState, action) {
    switch (action.type){
        case  DASHBOARD_LOAD_ATTEMPTED : 
            return{
                ...state,
                dashBoardData : action.payload.data
            };
        case DASHBOARD_LOAD_SUCCESSFUL :
            return{
                ...state,
            };
        case DASHBOARD_LOAD_FAILED : 
            return{
                initialState,
            };
        default :
         return {
            ...state,
        };
    }
 }