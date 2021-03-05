import React, { useEffect, useState } from 'react';
import { Switch } from '@headlessui/react';
import { FaRegSun, FaRegMoon } from 'react-icons/fa';

const ThemeChanger = () => {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' && window.__theme
  );

  useEffect(() => {
    window.__onThemeChange = () => {
      setTheme(window.__theme);
    };
  }, [theme]);

  const toggleTheme = (theme: 'light' | 'dark') => {
    window.__setPreferredTheme(theme);
  };

  return (
    <div className="flex">
      <Switch
        checked={theme === 'dark'}
        onChange={(e) => toggleTheme(e ? 'dark' : 'light')}
        className={`${
          theme === 'dark' ? 'bg-purple-700' : 'bg-gray-200'
        } relative inline-flex items-center px-1 h-6 rounded-full w-10`}
      >
        <span className="sr-only">Enable dark mode</span>
        <span
          className={`${
            theme === 'dark' ? 'translate-x-4' : 'translate-x-0'
          } inline-block w-4 h-4 transform bg-white rounded-full`}
        />
      </Switch>
      <div className="flex items-center pl-2 text-gray-700 dark:text-gray-300">
        {theme === 'dark' ? <FaRegMoon /> : <FaRegSun />}
      </div>
    </div>
  );
};

export default ThemeChanger;
