import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-white-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-400 text-xl font-semibold">Logo</div>
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Quick search ..."
            required
          />
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-gray-400">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400">
              Trainings
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400">
              Users
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400">
              More
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
