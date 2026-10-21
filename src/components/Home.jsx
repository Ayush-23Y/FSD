function Home({ goToLogin }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-md">

        <h1 className="text-4xl font-bold text-blue-600">
          CodeArc
        </h1>

        <p className="mt-4 text-gray-600">
          Practice DSA. Improve your coding skills.
        </p>

        <button
          onClick={goToLogin}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Start Coding
        </button>

      </div>
    </div>
  );
}

export default Home;