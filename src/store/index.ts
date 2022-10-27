import { configureStore } from "@reduxjs/toolkit";
import {dadataApi} from './dadataApi/datata.api';
export const store = configureStore({
    reducer: {
        [dadataApi.reducerPath]: dadataApi.reducer,
    },
    middleware: getDefaultWiddleWare => getDefaultWiddleWare().concat(dadataApi.middleware)
})


// export type RootState = ReturnType<typeof store.getState>   //Для удобства работы с данными в store