import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
  //added in useDarkMode hook
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar" data-testid ="navigation">
      <h1>List of Searched Players</h1>
      <div className="dark-mode__toggle">
          <p>Click on button switch between dark and light mode</p>
        <button data-testid ="button"
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;