import { useState } from "react";

import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [page, setPage] = useState("home");

  if (page === "login") {
    return (
      <Login
        goToDashboard={() => setPage("dashboard")}
        goToHome={() => setPage("home")}
      />
    );
  }

  if (page === "dashboard") {
    return (
      <Dashboard
        goToHome={() => setPage("home")}
      />
    );
  }

  return (
    <Home
      goToLogin={() => setPage("login")}
    />
  );
}

export default App;