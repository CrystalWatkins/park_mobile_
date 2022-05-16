import React, { Component } from "react";
import { getUserById } from "../services/userService";
import users from "./utils/usersApi";

class UserDetails extends Component {
  state = {
    //our state object that we are getting from the server. Setting everything to either empty string or Number.Min_Value (based on their type) as defaults
    data: {
      id: Number.MIN_VALUE,
      login: "",
      avatar_url: "",
      node_id: "",
      html_url: "",
      following_url: "",
      starred_url: "",
      organizations_url: "",
      repos_url: "",
      type: "",
      site_admin: false,
    },
  };
  mapToViewModel(user) {
    //here we are defining a function that is manually manually mapping
    return {
      id: user.id,
      login: user.login,
      avatar_url: user.avatar_url,
      node_id: user.node_id,
      html_url: user.html_url,
      following_url: user.following_url,
      starred_url: user.starred_url,
      organizations_url: user.organizations_url,
      repos_url: user.repos_url,
      type: user.type,
      site_admin: user.site_admin,
    };
  }

  getUserById(id) {
    const allUsers = users;
    console.log("allusers", allUsers);
    console.log("id", id);
    return allUsers.filter((user) => user.id === parseInt(id));
  }

  async componentDidMount() {
    try {
      const id = this.props.match.params.id; //get the user id off of the url so we can pass it on to the server to get the user by their id
      //not using because the api isn't working
      //const { data: user } = await getUserById(id); //get the user by id from the server. Here I'm picking the data object off of the response object and renaming it to user
      const filteredUser = this.getUserById(id);
      console.log("filtered User", filteredUser);
      this.setState({ data: this.mapToViewModel(filteredUser[0]) }); //invoke the mapToViewModel function that takes in the user object that we get back from the server and maps it to the correct properties on the state object
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  render() {
    const { data: user } = this.state;

    return (
      <section className="my-5">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
           
           
          <div className="row">
          <div className="col-5"></div>
          <div className="col-2  d-flex justify-content-center mb-3  mt-5">
          <img className="card-img-top" src={user.avatar_url} alt="Card image cap"/>
          </div> 
          <div className="col-5"></div>
          </div>
            {/* <div className="row"> 
                <h1 className="display-4">{user.login}'s Organizations</h1> */}
            <div className="row">
            <div className="col-12 d-flex justify-content-center mb-3 display-4">
                   <a
                  href={user.organizations_url}
                  target="_blank"
                  className="card-text"
                >
                  {user.login}'s Organizations
                </a>
              </div>
              </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center mb-3">
                <p className="lead">
                  Above a link to the API for {user.login}'s Organizations.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-12 d-flex justify-content-center mb-3">
                <h1 className="lead display-4">
                  GitHub: {user.type}
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center mb-3">
                <p className="lead">
                  Above defines the type of user {user.login} is on GitHub.
                </p>
              </div>
            </div>
           

            <div className="row">
              <div className="col-12 d-flex justify-content-center mb-3 display-4">
                <a
                  href={user.repos_url}
                  target="_blank"
                  className="card-text"
                >
                  {user.login}'s Repos
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center mb-3">
                <p className="lead">
                  Above a link to the API for {user.login}'s Repos.
                </p>
              </div>
            </div>

          




          </div>
        </div>
      </section>
    );
  }
}

export default UserDetails;
