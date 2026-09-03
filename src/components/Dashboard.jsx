import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import useFetch from "../hooks/useFetch";

function Dashboard({ goToHome }) {

  const user = useContext(UserContext);

  const problems = useFetch(
  import.meta.env.BASE_URL + "problems.json"
);
  useEffect(() => {
    document.title = "CodeArc Dashboard";
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-3xl mx-auto">

        <div className="bg-white p-6 rounded-xl shadow">

          <h1 className="text-3xl font-bold text-blue-600">
            CodeArc
          </h1>

          <h2 className="text-2xl font-bold mt-4">
            Welcome, {user}
          </h2>

          <p className="text-gray-600 mt-1">
            Choose a problem and start coding.
          </p>

        </div>

        <div className="bg-white p-6 rounded-xl shadow mt-6">

          <h2 className="text-2xl font-bold mb-4">
            DSA Problems
          </h2>

          {problems.map((problem) => (
            <div
              key={problem.id}
              className="border-b py-4 flex justify-between"
            >
              <span>
                {problem.id}. {problem.name}
              </span>

              <span className="text-blue-600">
                {problem.difficulty}
              </span>
            </div>
          ))}

        </div>

        <button
          onClick={goToHome}
          className="mt-6 px-5 py-2 bg-gray-800 text-white rounded"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Dashboard;