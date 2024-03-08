import { types } from "../types/types";



export const authReducer = (state={},action) =>{
    console.log(state);
    switch(action.type){
        case types.registrar: return {
            ...state,
            autentico:true,
            user:{...state.user,phone:action.payload.phone,document:action.payload.document}
        };
        case types.actualizar: return {
            ...state,
            autentico:true,
            user:{...state.user,name:action.payload.name,lastName:action.payload.lastName,birthDay:action.payload.birthDay}
        };
        case types.seleccionar: return {
            ...state,
            autentico:true,
            user:{...state.user,plan:action.payload.plan,costo:action.payload.costo}
        };
        case types.salir: return {
            autentico:false,
            user:{}
        };
        default:return state;
    }
}