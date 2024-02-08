import { types } from "../types/types";



export const authReducer = (state={},action) =>{
    switch(action.type){
        case types.registrar: return {
            ...state,
            dni:action.payload,
            celular:action.payload
        };
        case types.salir: return {
            dni:null,
            celular:null
        };
        default:return state;
    }
}