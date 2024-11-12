import React, { useState } from "react";
import AppointmentDisplay from "./components/AppointmentDisplay";
import UserContext from "./context/user.jsx";
import Login from "./components/Login.jsx";

function App() {
  const [accessToken, setAccessToken] = useState("");

  return (
    <>
      <UserContext.Provider value={{ accessToken, setAccessToken }}>
        {accessToken.length > 0 && <AppointmentDisplay />}
        {accessToken.length === 0 && <Login />}
      </UserContext.Provider>
    </>
  );
}

export default App;
