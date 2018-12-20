import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["likedJobs"]
};

const persistedReducer = persistReducer(persistConfig, reducers);

const INITIAL_STATE = {};
export const store = createStore(
  persistedReducer,
  INITIAL_STATE,
  compose(applyMiddleware(thunk))
);

// if you add a ".purge()" at the end, it will delete all the saved state previosuly
export const persistor = persistStore(store);
