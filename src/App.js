import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Teachers from "./Component/Teachers/Teachers";
import Parents from "./Component/Parents/Parents";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
function App() {
  return (
      <BrowserRouter>
            <Navbar/>
            <Route path="/teachers" component={Teachers}/>
            <Route path="/parents" component={Parents}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
      </BrowserRouter>

  );
}

export default App;
