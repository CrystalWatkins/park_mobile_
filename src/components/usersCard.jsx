import React from "react";
import Card from "./card";

const UsersCard = ({ users }) => {
  console.log("Made it to users card",users);
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