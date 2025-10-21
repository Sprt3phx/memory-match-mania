
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import Card from "../components/Card";


export default function Game() {
    const { theme } = useTheme();
    const cards = ["🐰", "🐇", "🥕", "🌸", "🐣", "🐿️", "🐾", "🐦"]; // placeholder icons
    const doubled = [...cards, ...cards];//simulate pairs
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [isProcessing, setIsProcessing] = useState(false);


    function handleCardFlip(index) {
        if (isProcessing) return; // Prevent actions while processing
        if (matchedCards.includes(index)) return; // Ignore already matched cards
        if (flippedCards.includes(index)) return; // Ignore already flipped cards'

        if (newFlipped.length === 2) {
            setIsProcessing(true);
            const [first, second] = newFlipped;
            if (doubled[first] === doubled[second]) {
                setMatchedCards((prev) => [...prev, first, second]);
                setFlippedCards([]);
                setIsProcessing(false);
            } else {
                setTimeout(() => {
                    setFlippedCards([]);
                    setIsProcessing(false);
                }, 1000);
            }
        }
    }



        return (
            <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                <h1 className="text-4xl font-bold mb-4">Memory Match Mania</h1>

                <div className="grid grid-cols-4 gap-4 w-full max-w-md mt-8">
                    {doubled.map((icon, index) => (
                        <Card key={index} value={icon} theme={theme} flipped={flippedCards.includes(index) || matchedCards.includes(index)} onFlip={() => handleCardFlip(index)} />
                    ))}
                </div>
            </section>
        );
    }
