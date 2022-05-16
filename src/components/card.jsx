import React from "react";
import { Link } from "react-router-dom";

const Card = ({ user }) => {
  console.log("user", user)
  return (
    <div className="card user-card">
      <img className="card-img-top" src={user.avatar_url} alt="Card image cap"/>
      <div className="card-body">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <h5 className="card-title">Name: {user.login}</h5>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 d-flex justify-content-center">
            <a href={user.html_url} target="_blank" className="card-text">{user.login}'s Repos</a>
          </div>
        </div>        
        
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <Link to={`/user/${user.id}`} className="btn btn-primary">User Detail</Link>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Card;