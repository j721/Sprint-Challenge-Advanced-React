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
      <h1>Click here to switch between dark mode and light mode</h1>
      <div className="dark-mode__toggle">
        <button
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;