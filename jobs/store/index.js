import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import { persistStore, autoRehydrate } from "redux-persist";
import { AsyncStorage } from "react-native";

const INITIAL_STATE = {};
const store = createStore(
  reducers,
  INITIAL_STATE,
  compose(
    applyMiddleware(thunk),
    autoRehydrate()
  )
);

// if you add a ".purge()" at the end, it will delete all the saved state previosuly
persistStore(store, { storage: AsyncStorage, whitelist: ["likedJobs"] });

export default store;
