import "./App.css";
import { useState } from "react";
import RestrictedPage from "./components/RestrictedPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = "Daniels";

  function Login() {
    setIsLoggedIn(true);
  }

  function Logout() {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <div className="App-header">
        <RestrictedPage
          isLoggedIn={isLoggedIn}
          user={user}
          Login={Login}
          Logout={Logout}
        />
      </div>
    </div>
  );
}

export default App;
