import React from 'react';
import { useTheme } from '../context/ThemeContext';
import ThemeSelect from '../components/ThemeSelect.jsx';


export default function Settings() {
    const { theme, toggleTheme } = useTheme();


    return (
      <section
        className={`flex flex-col items-center justify-center h-screen transition-colors duration-500 ${
          theme === "light"
            ? "bg-gradient-to-br from-gray-100 to-gray-300 text-black"
            : "bg-gradient-to-br from-gray-800 to-gray-900 text-white"
        } p-6 rounded-lg shadow-lg`}
      >
        <h1 className="text-4xl font-bold mb-6">Settings</h1>

        <div className="space-y-4 text-lg">
          <div>
            <label className="mr-2 font-semibold">Theme:</label>
            <ThemeSelect
              value={theme}
              onChange={toggleTheme}
              className={`rounded-md px-2 py-1 transition-colors duration-300 ${
                theme === "light"
                  ? "text-black bg-white"
                  : "text-white bg-gray-800 border border-gray-600"
              }`}
            >
              <option value="light" className="text-white">
                Light
              </option>
              <option value="dark" className="text-white">
                Dark
              </option>
            </ThemeSelect>
          </div>
        </div>

        <div>
          <label className="mr-2 font-semibold">Board Size:</label>
          <ThemeSelect
            className={`rounded-md px-2 py-1 transition-colors duration-300 ${
              theme === "light"
                ? "text-black bg-white"
                : "text-white bg-gray-800 border border-gray-600"
            }`}
          >
            <option>4 x 4</option>
            <option>6 x 6</option>
            <option>8 x 8</option>
          </ThemeSelect>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("memoryMatchLevel");
            window.location.reload();
          }}
          className="mt-6 bg-red-500 text-black px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Reset Progress
        </button>
      </section>
    );
}