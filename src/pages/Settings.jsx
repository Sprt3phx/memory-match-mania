import React from 'react';

export default function Settings() {
    return (
      <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-700 to-gray-900 text-white">
        
            <div className='space-y-4 text-lg'>
                <div>
                    <label className='mr-2 font-semibold'>Theme:</label>
                    <select className='text-black rounded-md px-2 py-1'>
                        <option>Light</option>
                        <option>Dark</option>
                    </select>
                </div>
            </div>

            <div>
                <label className='mr-2 font-semibold'>Board Size:</label>
                <select className='text-black rounded-md px-2 py-1'>
                    <option>4 x 4</option>
                    <option>6 x 6</option>
                    <option>8 x 8</option>
                </select>
            </div>
      </section>
    );
}