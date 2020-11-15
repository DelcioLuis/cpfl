import React from 'react';
import {Provider} from "react-redux";
import { PersistGate} from "redux-persist/integration/react";

import "./global.css"

import Routes from "./routes";



import {store, persistor} from "./store";


function App() {

  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <Routes/>
          
        
      </PersistGate>

   </Provider>
   
  
  );
}

export default App;
