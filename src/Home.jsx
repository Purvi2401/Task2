import { signOut } from "firebase/auth";
import React from "react";
import { database } from "./PasswordLoginWithFirebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import Counter from "./Counter";

function HomeScreen() {
  const history = useNavigate();

  const handleClick = () => {
    signOut(database).then((val) => {
      console.log(val, "val");
      history("/");
    });
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>SignOut</button>
      <div>
        <Counter />
      </div>
    </div>
  );
}
export default HomeScreen;
