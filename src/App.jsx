
import { useState } from "react";

import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Chat from "./components/Chat";

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
      <>
        <button
  onClick={() => setPage("chat")}
  style={{
    padding: "10px 18px",
    margin: "15px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }}
>
  Open Real-Time Chat
</button>
        <Dashboard goToHome={() => setPage("home")} />
      </>
    );
  }

  if (page === "chat") {
    return (
      <>
        <button onClick={() => setPage("dashboard")}>
          Back to Dashboard
        </button>
        <Chat />
      </>
    );
  }

  return (
    <Home goToLogin={() => setPage("login")} />
  );
}

export default App;
