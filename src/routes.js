import React from "react";
import { BrowserRouter, Route, Switch  } from "react-router-dom";

import Index from "./pages/Home";
import Modal from "./pages/TelaModal";
import Gamifica from "./pages/Gamifica";
import DebitoAutomatico from "./pages/DebitoAutomatico";
import Parcela from "./pages/Parcela";
import MetodoPagamento from "./pages/Opcpagmento";


export default function Routes(){
  return(
      <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Index} />
              <Route path="/modal" exact component={Modal} />
              <Route path="/gami" exact component={Gamifica} />
              <Route path="/debitoAutomatico" exact component={DebitoAutomatico} />
              <Route path="/parcela" exact component={Parcela} />
              <Route path="/oppagame" exact component={MetodoPagamento} />
              
          </Switch>
      </BrowserRouter>
  )
}


