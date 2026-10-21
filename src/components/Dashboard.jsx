import Navbar from "./Navbar";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { AppContext } from "../context/AppContext";
import useFetch from "../hooks/useFetch";

function Dashboard({ goToHome }) {
  const user = useContext(UserContext);
  const { solvedProblems, markSolved, removeSolved } =
    useContext(AppContext);

  const problems = useFetch(
    import.meta.env.BASE_URL + "problems.json"
  );

  useEffect(() => {
    document.title = "CodeArc Dashboard";
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Navbar />
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow">
          <h1 className="text-3xl font-bold text-blue-600">
            CodeArc
          </h1>

          <h2 className="text-2xl font-bold mt-4">
            Welcome, {user}
          </h2>

          <p className="mt-3 font-semibold">
            Problems Solved: {solvedProblems.length}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow mt-6">
          <h2 className="text-2xl font-bold mb-4">
            DSA Problems
          </h2>

          {problems.map((problem) => {
            const solved = solvedProblems.some(
              (p) => p.id === problem.id
            );

            return (
              <div
                key={problem.id}
                className="border-b py-4 flex justify-between items-center gap-3"
              >
                <div>
                  <p>
                    {problem.id}. {problem.name}
                  </p>
                  <p className="text-blue-600 text-sm">
                    {problem.difficulty}
                  </p>
                </div>

                <button
                  onClick={() =>
                    solved
                      ? removeSolved(problem.id)
                      : markSolved(problem)
                  }
                  className="bg-blue-600 text-white px-3 py-2 rounded"
                >
                  {solved ? "Remove Solved" : "Mark Solved"}
                </button>
              </div>
            );
          })}
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
