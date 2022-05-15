import React from "react";
import NavBar from "./components/navBar";
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';

const App = () =>{
  return(
    <>
        <NavBar/>
        <div className="container-fluid bg-color">
          <Switch>
            <Route path="/user/:id" component={UserDetails} />
            <Redirect from="/" exact to="/user" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
    </>
  );
}

export default App;