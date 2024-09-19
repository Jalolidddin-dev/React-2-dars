import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  // Props

  // jsx

  // let ism = "Jaloliddin Abdurahmonov";

  // let person = {
  //   name: "Jaloliddin",
  //   age: 25,
  //   job: "Developer",
  // };

  let users = [
    {
      id: 1,
      name: "Jaloliddin",
      age: 25,
      job: "Developer",
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzk92qOx7c5k5fybjVbUkwg6BGW_ptjgID9A&s",
    },

    {
      id: 2,
      name: "Abbos",
      age: 26,
      job: "Bugalter",
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzk92qOx7c5k5fybjVbUkwg6BGW_ptjgID9A&s",
    },
    {
      id: 3,
      name: "Behruz",
      age: 24,
      job: "Taxis",
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzk92qOx7c5k5fybjVbUkwg6BGW_ptjgID9A&s",
    },
  ];

  const [count, setCount] = useState(2);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Navbar arr={users} />

      {/* <h1>My name is {person.name}</h1>
      <p>I am {person.age} years old</p> */}

      {/* 
      {users.map((user) => (
        <div key={user.id}>
          <h1 className="user_name">{user.name}</h1>
          <h2>{user.job}</h2>
        </div>
      ))} */}

      <div>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;
