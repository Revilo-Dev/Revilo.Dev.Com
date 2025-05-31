import React from 'react';
import useThemeStore from '../store/ThemeStore.js';
import { LayoutGrid } from 'lucide-react';


function ThemeDropdown() {
  const { setTheme } = useThemeStore();

  const themeList = [
    "light", "dark", "business", "corporate", "lofi", "wireframe", "black", "luxury",
    "coffee",
  ];

  return (
    <div className="ml-auto">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className=" ThemeBtn btn btn-primary AH-Pulse">
        <LayoutGrid />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 max-h-96 overflow-y-auto sm:w-64 md:w-72 A-SlideDownBounce"
        >
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 md:grid-cols-3">
            {themeList.map((themeName) => (
              <button
                key={themeName}
                className={`flex flex-col items-center justify-center AH-Glow p-2 rounded-md shadow-sm transition-colors hover:ring-2 hover:ring-accent-500 text-sm capitalize ${themeName}`}
                onClick={() => setTheme(themeName)}
                style={{ color: 'inherit', backgroundColor: 'var(--b1)' }}
              >
                <div className="relative h-6 w-10 rounded-md overflow-hidden mb-1" data-theme={themeName}>
                  <div className="absolute inset-0 grid grid-cols-3 gap-px p-px">
                    <div className="bg-primary rounded-sm"></div>
                    <div className="bg-secondary rounded-sm"></div>
                    <div className="bg-accent rounded-sm"></div>
                  </div>
                </div>
                {themeName}
              </button>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default ThemeDropdown;