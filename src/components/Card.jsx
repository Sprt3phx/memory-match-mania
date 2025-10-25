import React from "react";
import { motion } from "framer-motion";

export default function Card({ value, theme, flipped, matched, onFlip }) {
  // 💫 Animation for when a match is found
  if (matched) {
    return (
      <motion.div
        initial={{ scale: 1, opacity: 1, boxShadow: "0 0 0px gold" }}
        animate={{
          scale: [1, 1.1, 0.9, 0],
          opacity: [1, 1, 0.8, 0],
          boxShadow: ["0 0 10px gold", "0 0 20px gold", "0 0 0px gold"],
        }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="aspect-square"
      />
    );
  }

  return (
    <motion.div
      className="relative aspect-square cursor-pointer perspective-1000"
      onClick={onFlip}
    >
      <motion.div
        className="relative w-full h-full rounded-xl shadow-lg flex items-center justify-center text-4xl font-bold preserve-3d"
        animate={{
          rotateY: flipped ? 180 : 0,
          scale: flipped ? [1, 1.05, 1] : 1,
        }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT of card — now with 3D glossy styling */}
        <div
          className={`absolute inset-0 rounded-xl flex items-center justify-center backface-hidden border-2 ${
            theme === "light"
              ? "bg-gradient-to-br from-pink-200 to-blue-200 border-blue-300 shadow-inner"
              : "bg-gradient-to-br from-slate-700 to-indigo-800 border-indigo-500 shadow-lg"
          }`}
        >
          <div
            className={`absolute inset-x-2 top-2 h-1/5 rounded-t-lg opacity-30 ${
              theme === "light"
                ? "bg-white"
                : "bg-gradient-to-br from-indigo-400 to-purple-600"
            }`}
          />
          <span className="relative text-5xl drop-shadow-md">🎴</span>
        </div>

        {/* BACK of card — the bunny image */}
        <div
          className={`absolute inset-0 rounded-xl flex items-center justify-center backface-hidden rotate-y-180 overflow-hidden ${
            theme === "light"
              ? "bg-blue-100 text-blue-900"
              : "bg-cyan-900 text-white"
          }`}
        >
          <img
            src={value}
            alt="Bunny GIF"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
