import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Teachers from "./Component/Teachers/Teachers";
import Parents from "./Component/Parents/Parents";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import Pupils from "./Component/Pupils/Pupils";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import ErrorRoute from "./Component/ErrorRoute/ErrorRoute";
function App() {
  return (
      <BrowserRouter>
            <Navbar/>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/teachers" component={Teachers}/>
              <Route path="/parents" component={Parents}/>
              <Route path="/pupils" component={Pupils}/>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
              <Route path="/error" component={ErrorRoute}/>
              <Redirect to="/error"/>
          </Switch>
            <Footer/>
      </BrowserRouter>

  );
}

export default App;
