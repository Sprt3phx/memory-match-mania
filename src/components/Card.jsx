import React from 'react';
import { motion } from 'framer-motion';

export default function Card({ value, theme, flipped, onFlip
 }) {
   
    return (
    <motion.div
      className="relative aspect-square cursor-pointer perspective-1000"
      onClick={onFlip}
    >
      {/* Card Inner */}
      <motion.div
        className="relative w-full h-full rounded-xl shadow-lg flex items-center justify-center text-4xl font-bold preserve-3d"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}  
      >
        {/* FRONT of card */}
        <div
          className={`absolute inset-0 rounded-xl flex items-center justify-center backface-hidden ${
            theme === "light"
              ? "bg-white text-blue-800"
              : "bg-blue-900 text-white"
          }`}
        >
          🂠
        </div>

        {/* BACK of card */}
        <div
          className={`absolute inset-0 rounded-xl flex items-center justify-center backface-hidden rotate-y-180 ${
            theme === "light"
              ? "bg-blue-200 text-blue-900"
              : "bg-cyan-800 text-white"
          }`}
        >
          {value}
        </div>
      </motion.div>
    </motion.div>
  );
}
 
       
        