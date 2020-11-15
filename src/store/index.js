import { createStore } from "redux";
import storage from "redux-persist/es/storage";

import { persistStore, persistReducer} from "redux-persist";



import rootReducer from "./modules/rootReducer";

const persistConfig = {
    key:"root",
    storage
};

const  persistedReducer = persistReducer(persistConfig, rootReducer); 
const store = createStore( persistedReducer);

const persistor = persistStore(store);


export { store, persistor};