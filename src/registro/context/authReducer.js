import { types } from "../types/types";



export const authReducer = (state={},action) =>{
    switch(action.type){
        case types.registrar: return {
            ...state,
            autentico:true,
            user:action.payload
        };
        case types.salir: return {
            autentico:false,
            user:null
        };
        default:return state;
    }
}