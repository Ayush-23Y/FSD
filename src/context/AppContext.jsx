import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [solvedProblems, setSolvedProblems] = useState([]);

  function markSolved(problem) {
    setSolvedProblems((previous) => {
      if (previous.some((p) => p.id === problem.id)) {
        return previous;
      }
      return [...previous, problem];
    });
  }

  function removeSolved(id) {
    setSolvedProblems((previous) =>
      previous.filter((problem) => problem.id !== id)
    );
  }

  return (
    <AppContext.Provider
      value={{ solvedProblems, markSolved, removeSolved }}
    >
      {children}
    </AppContext.Provider>
  );
}