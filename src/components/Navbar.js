import React from "react";
import "./Navbar.css";

function Navbar({ arr }) {
  //   console.log(arr);

  return (
    <div className="users_cards">
      {arr.map((user) => (
        <div className="user_card" key={user.id}>
          <h1>{user.name}</h1>
          <img src={user.img_url} alt="" />
          <p>{user.age}</p>
          <h3>{user.job}</h3>
        </div>
      ))}
    </div>
  );
}

export default Navbar;
