import React from "react";
import NavBar from "./components/navBar";
import UserDetails from "./components/userDetails";
import Users from "./components/users";
import NotFound from "./components/notFound";
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';

const App = () =>{
  return(
    <>
        <NavBar/>
        <div className="container-fluid bg-color">
          <Switch>
            <Route path="/user/:id" component={UserDetails} />
            <Route path="/users" component={Users} />
            <Redirect from="/" to="/users" />
            <Redirect to="/not-found" component={NotFound} />
          </Switch>
        </div>
    </>
  );
}

export default App;