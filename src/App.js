import React, {useState, useEffect} from "react";
import MainPage from "./pages/mainPage/MainPage";
import ErrorPage from "./pages/errorPage/ErrorPage";

function App() {
  const [user, setUser] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const name = prompt("Введите свое имя: ")
    const lastname = prompt("Введите свою фамилию: ")
    setUser({name, lastname});

    if (name === "John" && lastname === "Johns") {
      setAuthorized(true);
    } else {
      setAuthorized(false);
    }
  }, []);

  if (!user) return null
  return (
    <div>
      {authorized ? (
          <MainPage user={user}/>
      ) : (
          <ErrorPage user={user}/>
      )}
    </div>
  );
}

export default App;
