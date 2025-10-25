import { createContext, useState, useContext, useEffect } from 'react';

//Create the global context
const ThemeContext = createContext();

//Create a provider component
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(
      () => localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

//Toggle between light and dark themes
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    };

//The provider makes the theme + toggle available to any child component that calls the context
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
    );
}

//Create a custom hook to make using the context easier
export function useTheme() {
    return useContext(ThemeContext);
}
