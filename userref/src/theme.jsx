import React, { useState, useContext, createContext } from 'react';


const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      };
    
      return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      );
    };
    const ThemedComponent = () => {
        const { theme, toggleTheme } = useContext(ThemeContext);
      
        return (
          <div style={{
            backgroundColor: theme === 'light' ? '#fff' : '#333',
            color: theme === 'light' ? '#000' : '#fff',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <button onClick={toggleTheme}>
              Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
            </button>
          </div>
        );
      };
      
      const Cpp = () => {
        return (
          <ThemeProvider>
            <ThemedComponent />
          </ThemeProvider>
        );
      };
      export default Cpp