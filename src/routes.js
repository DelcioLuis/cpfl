import React from "react";
import { BrowserRouter, Route, Switch  } from "react-router-dom";

import Index from "./pages/Home";
import Modal from "./pages/TelaModal";
import Gamifica from "./pages/Gamifica";


export default function Routes(){
  return(
      <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Index} />
              <Route path="/modal" exact component={Modal} />
              <Route path="/gami" exact component={Gamifica} />
              
          </Switch>
      </BrowserRouter>
  )
}


