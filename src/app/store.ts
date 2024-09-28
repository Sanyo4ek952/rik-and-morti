import {AnyAction, combineReducers, configureStore, ThunkAction, ThunkDispatch} from "@reduxjs/toolkit";
import {characterReducer} from "../page/character/characterReducer";
import {useDispatch} from "react-redux";


const rootReducer = combineReducers({
    character: characterReducer,

});

export const store = configureStore({
    reducer: rootReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>;

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
// @ts-ignore
window.store = store;
