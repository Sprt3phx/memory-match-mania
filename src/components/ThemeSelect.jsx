import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

export default function ThemeSelect({ value, onChange, children }) {
    const { theme } = useTheme();

    return (
        <select
            value={value}
            onChange={onChange}
            className={`rounded-md px-2 py-1 transition-colors duration-300 ${
                theme === 'light'
                    ? 'text-black bg-white border border-gray-300' : 'text-white bg-gray-800 border border-gray-600'
            }`}
        >   
            {children}
        </select>
    );
}
