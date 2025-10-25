import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import { useTheme } from "../context/ThemeContext";
import Card from "../components/Card";

export default function Game() {
  const { theme } = useTheme();
  const [level, setLevel] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  // Fetch bunny GIFs from GIPHY API
  useEffect(() => {
    async function fetchBunnies() {
      try {
        const res = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=${
            import.meta.env.VITE_GIPHY_API_KEY
          }&q=cute+bunny&limit=8&rating=g`
        );
        const data = await res.json();
        const gifUrls = data.data.map((gif) => gif.images.fixed_height.url);
        const doubled = [...gifUrls, ...gifUrls].sort(
          () => Math.random() - 0.5
        );
        setCards(doubled);
      } catch (err) {
        console.error("Error fetching bunny GIFs:", err);
      }
    }

    fetchBunnies();
  }, []);

    //Loads saved level from localStorage
    useEffect(() => {
        const savedLevel = localStorage.getItem("memory-match-level");
        if (savedLevel) {
            setLevel(Number(savedLevel));
        }
    }, []);
    
    //Saves level to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("memory-match-level", level);
    }, [level]);

    

  function handleCardFlip(index) {
    if (
      isProcessing ||
      matchedCards.includes(index) ||
      flippedCards.includes(index)
    )
      return;

    const newFlipped = [...flippedCards, index];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setIsProcessing(true);
      const [first, second] = newFlipped;

      if (cards[first] === cards[second]) {
        setTimeout(() => {
          setMatchedCards((prev) => [...prev, first, second]);
          setCards((prevCards) =>
            prevCards.map((c, i) => (i === first || i === second ? null : c))
          );
          setFlippedCards([]);
          setIsProcessing(false);
        }, 900);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
          setIsProcessing(false);
        }, 1000);
      }
    }
    // Check if all cards are cleared
    if (cards.filter(Boolean).length === 2) {
      // only 2 left just matched
      setTimeout(() => {
        setShowPopup(true); //show "Level Complete!"
      }, 700);
    }
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-start py-10 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
      <h1 className="text-4xl font-bold mb-6">Memory Match Mania</h1>

      <motion.div
        layout
        transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
        className={`grid gap-4 w-full max-w-3xl mt-8 ${
          cards.length <= 16
            ? "grid-cols-4"
            : cards.length <= 36
            ? "grid-cols-6"
            : "grid-cols-8"
        }`}
      >
        <AnimatePresence>
          {cards.map(
            (url, index) =>
              url && (
                <motion.div
                  key={index}
                  layout
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card
                    value={url}
                    theme={theme}
                    flipped={
                      flippedCards.includes(index) ||
                      matchedCards.includes(index)
                    }
                    onFlip={() => handleCardFlip(index)}
                  />
                </motion.div>
              )
          )}
        </AnimatePresence>
      </motion.div>

      {showPopup && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white z-50">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gradient-to-br from-purple-600 to-indigo-600 p-8 rounded-2xl shadow-2xl text-center"
          >
            <h2 className="text-3xl font-bold mb-3">
              🎉 Level {level} Complete!
            </h2>
            <p className="text-lg mb-5">You matched all the bunnies! 🐇💖</p>
            <button
              onClick={() => {
                setShowPopup(false);
                setLevel((prev) => prev + 1);
                setMatchedCards([]);
                setFlippedCards([]);
                // Fetch more bunnies for the next level (larger grid)
                const newLimit = 8 + level * 2;
                fetch(
                  `https://api.giphy.com/v1/gifs/search?api_key=${
                    import.meta.env.VITE_GIPHY_API_KEY
                  }&q=cute+bunny&limit=${newLimit}&rating=g`
                )
                  .then((res) => res.json())
                  .then((data) => {
                    const gifUrls = data.data.map(
                      (gif) => gif.images.fixed_height.url
                    );
                    setCards(
                      [...gifUrls, ...gifUrls].sort(() => Math.random() - 0.5)
                    );
                  });
              }}
              className="bg-white text-purple-700 font-semibold px-6 py-2 rounded-lg hover:bg-purple-200 transition"
            >
              Next Level
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
