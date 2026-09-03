import { useState } from "react";

function Login({ goToDashboard, goToHome }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) {
      goToDashboard();
    } else {
      alert("Please enter email and password");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

        <h1 className="text-3xl font-bold text-blue-600 text-center">
          CodeArc
        </h1>

        <h2 className="text-2xl font-bold mt-6">
          Login
        </h2>

        <form onSubmit={handleSubmit}>

          <label className="block mt-5 mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded"
          />

          <label className="block mt-4 mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded"
          />

          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
          >
            Login
          </button>

        </form>

        <button
          onClick={goToHome}
          className="w-full mt-3 border p-3 rounded"
        >
          Back to Home
        </button>

      </div>
    </div>
  );
}

export default Login;