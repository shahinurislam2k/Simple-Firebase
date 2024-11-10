import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./App.css";
import { auth } from "./firebase/firebase-init";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSinIn = () => {
    console.log("Hello google");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  return (
    <>
      <h1> Simple Firebase</h1>
      <button onClick={handleGoogleSinIn}>Login with Google</button>
      {user && (
        <div>
          <h3>User: {user.displayName}</h3>
          <h4>Email: {user.email}</h4>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </>
  );
}

export default App;
