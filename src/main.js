import './style.css'

const app = document.querySelector('#app')

// HOME PAGE
function homePage() {
  app.innerHTML = `
    <nav class="bg-blue-600 text-white p-4">
      <div class="max-w-5xl mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">CodeArc</h1>

        <button id="loginBtn"
          class="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100">
          Login
        </button>
      </div>
    </nav>

    <section class="text-center py-20 px-6">
      <h2 class="text-4xl font-bold text-gray-800">
        Welcome to CodeArc
      </h2>

      <p class="mt-4 text-gray-600 text-lg">
        Practice DSA, solve coding problems and improve your skills.
      </p>

      <button id="startBtn"
        class="mt-6 bg-blue-600 text-white px-6 py-3 rounded
               hover:bg-blue-700">
        Start Coding
      </button>
    </section>

    <section class="max-w-5xl mx-auto px-6 pb-16">
      <h2 class="text-2xl font-bold text-center mb-8">
        What CodeArc Offers
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div class="bg-white p-6 rounded-lg shadow text-center">
          <h3 class="text-xl font-bold text-blue-600">
            DSA Problems
          </h3>
          <p class="mt-3 text-gray-600">
            Practice problems on arrays, trees, graphs and more.
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow text-center">
          <h3 class="text-xl font-bold text-green-600">
            Contests
          </h3>
          <p class="mt-3 text-gray-600">
            Participate in coding contests and test your skills.
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow text-center">
          <h3 class="text-xl font-bold text-purple-600">
            Track Progress
          </h3>
          <p class="mt-3 text-gray-600">
            Keep track of your solved problems and improvement.
          </p>
        </div>

      </div>
    </section>
  `

  document.querySelector('#loginBtn').onclick = loginPage
  document.querySelector('#startBtn').onclick = loginPage
}


// LOGIN PAGE
function loginPage() {
  app.innerHTML = `
    <div class="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div class="bg-white w-full max-w-md p-8 rounded-lg shadow">

        <h2 class="text-3xl font-bold text-center text-blue-600">
          CodeArc Login
        </h2>

        <p class="text-center text-gray-500 mt-2">
          Login to continue
        </p>

        <label class="block mt-6 mb-2">
          Email
        </label>

        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          class="w-full border p-3 rounded focus:outline-none
                 focus:ring-2 focus:ring-blue-500"
        >

        <label class="block mt-4 mb-2">
          Password
        </label>

        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          class="w-full border p-3 rounded focus:outline-none
                 focus:ring-2 focus:ring-blue-500"
        >

        <button id="loginSubmit"
          class="w-full mt-6 bg-blue-600 text-white p-3 rounded
                 hover:bg-blue-700">
          Login
        </button>

        <button id="backBtn"
          class="w-full mt-3 border p-3 rounded
                 hover:bg-gray-100">
          Back to Home
        </button>

        <p id="error" class="text-red-500 text-center mt-4"></p>

      </div>
    </div>
  `

  document.querySelector('#backBtn').onclick = homePage

  document.querySelector('#loginSubmit').onclick = () => {

    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const error = document.querySelector('#error')

    if (email === '' || password === '') {
      error.textContent = 'Please enter email and password.'
    } else {
      dashboardPage(email)
    }
  }
}


// DASHBOARD PAGE
function dashboardPage(email) {
  app.innerHTML = `
    <nav class="bg-blue-600 text-white p-4">
      <div class="max-w-5xl mx-auto flex justify-between items-center">

        <h1 class="text-2xl font-bold">
          CodeArc
        </h1>

        <button id="logout"
          class="bg-white text-blue-600 px-4 py-2 rounded">
          Logout
        </button>

      </div>
    </nav>

    <main class="max-w-5xl mx-auto p-6">

      <h2 class="text-3xl font-bold text-gray-800">
        Welcome, ${email}
      </h2>

      <p class="text-gray-600 mt-2">
        Here is your CodeArc dashboard.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

        <div class="bg-white p-6 rounded-lg shadow">
          <h3 class="text-gray-500">
            Problems Solved
          </h3>

          <p class="text-3xl font-bold text-blue-600 mt-2">
            25
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow">
          <h3 class="text-gray-500">
            Contests
          </h3>

          <p class="text-3xl font-bold text-green-600 mt-2">
            5
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow">
          <h3 class="text-gray-500">
            Rating
          </h3>

          <p class="text-3xl font-bold text-purple-600 mt-2">
            1200
          </p>
        </div>

      </div>

      <div class="bg-white p-6 rounded-lg shadow mt-8">

        <h3 class="text-xl font-bold">
          Recent Problems
        </h3>

        <ul class="mt-4 space-y-3">

          <li class="border-b pb-2">
            Two Sum - Easy
          </li>

          <li class="border-b pb-2">
            Binary Search - Easy
          </li>

          <li class="border-b pb-2">
            Binary Tree Traversal - Medium
          </li>

        </ul>

      </div>

    </main>
  `

  document.querySelector('#logout').onclick = homePage
}


// START WEBSITE
homePage()