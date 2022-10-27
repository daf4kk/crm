import { configureStore } from "@reduxjs/toolkit";
import {dadataApi} from './dadataApi/datata.api';
export const store = configureStore({
    reducer: {
        [dadataApi.reducerPath]: dadataApi.reducer,
    },
    middleware: getDefaultWiddleWare => getDefaultWiddleWare().concat(dadataApi.middleware)
})