import React from 'react';

export default function Results() {
    return (
      <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-yellow-500 to-orange-600 text-white">
            <h1 className='text-4xl font-bold mb-4'>Results</h1>
            <p className='text-lg opacity-90'>Your Best Time:</p>
            <p className='text-lg opacity-90'>Matches Found:</p>
            <button className='px-6 py-2 bg-white text-orange-700 font-semibold rounded-lg shadow-md hover:bg-orange-100 transition'>Play Again</button>
      </section>
    );
}