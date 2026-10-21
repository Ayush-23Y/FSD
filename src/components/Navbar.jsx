
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Navbar() {
  const { solvedProblems } = useContext(AppContext);

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center rounded-xl">
      <h1 className="text-xl font-bold">CodeArc</h1>
      <p>Problems Solved: {solvedProblems.length}</p>
    </nav>
  );
}

export default Navbar;
