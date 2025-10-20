
import React from "react";

export default function Game() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
      <h1 className="text-4xl font-bold mb-4">Game Board</h1>
      <p className="text-lg opacity-90 mb-6">
        Match all the cards as fast as you can!
      </p>
      <button className="px-6 py-2 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-blue-100 transition">
        Reset Game
      </button>
    </section>
  );
}
    