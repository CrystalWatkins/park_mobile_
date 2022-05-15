import React, { Component } from "react";
import Card from "./card";

const UsersCard = ({ users }) => {
  
    return (
      <main className="card-wrapper-container clearfix">
        {users.map((user) => (
          <Card
            user={user}
          />
        ))}
      </main>
    );
  
}

export default UsersCard;