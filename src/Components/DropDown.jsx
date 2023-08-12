import React from "react";

const DropDown = ({ options }) => {
  return (
    <div
      class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="py-1" role="none">
        {options.map((option, i) => (
          <>
            <a
              href="#"
              class="text-gray-700 px-4 py-2 text-sm flex justify-normal"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
              key={i}
            >
              <img className="w-6 h-6 rounded-full mr-2 justify-center" src={option.img} />
              <span>{option.label}</span>
            </a>
          </>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
