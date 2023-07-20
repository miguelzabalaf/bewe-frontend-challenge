import { compose, Store, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, WebStorage } from "redux-persist";
import { default as reduxInmmutableStateInvariant } from "redux-immutable-state-invariant";
import { Persistor } from "redux-persist/es/types";
import storage from "redux-persist/lib/storage";
import thunk, { ThunkMiddleware } from "redux-thunk";
import reducers from "../reducers";
import { initialState as profileInitialState } from "../reducers/profile/initialState";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

interface IStore {
    store: Store;
    persistor: Persistor;
}

interface PersistConfig {
    key: string;
    storage: WebStorage;
    blacklist?: string[];
    whitelist?: string[];
}

export interface StoreState {
    profile: typeof profileInitialState;
}

export function useStoreConfig(): IStore {

    let middlewaresToApply: ThunkMiddleware | any = [thunk];

    const persistConfig: PersistConfig = {
        key: "root",
        storage: storage,
        blacklist: [],
    };

    const persistReduce = persistReducer(persistConfig, reducers);

    if (process.env.REACT_APP_ENV === "development") {
        middlewaresToApply = [
            ...middlewaresToApply,
            reduxInmmutableStateInvariant(),
        ];
    }

    let store = configureStore({
        reducer: persistReduce,
        middleware: middlewaresToApply,
        devTools: process.env.REACT_APP_ENV === "development",
    });

    const persistor = persistStore(store);

    return {
        store,
        persistor,
    };
};
