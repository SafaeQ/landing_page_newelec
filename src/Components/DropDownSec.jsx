import React from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { MdOutlinePrivacyTip } from "react-icons/md";

const DropDownSec = () => {
  return (
    <div
      className="absolute right-0 z-10 mt-11 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex="-1"
    >
      <div className="py-1 flex" role="none">
        <span
          className="text-gray-700 flex px-4 py-2 text-sm flex-col justify-start"
          role="menuitem"
          tabIndex="-1"
          id="menu-item-0"
        >
          <div className="text-zinc-800 text-xs font-bold flex">BESIX Group</div>
          <div className="text-neutral-500 text-xs font-normal">
            besix.group@besix.be
          </div>
        </span>
      </div>
      <div className="py-1" role="none">
        <span
          className="text-gray-700 flex px-4 py-2 text-sm"
          role="menuitem"
          tabIndex="-1"
          id="menu-item-2"
        >
          <IoSettingsSharp
            className="w-6 h-6 rounded-full mr-2 justify-center"
            color="gray"
          />
          <span>Profile settings</span>
        </span>
        <span
          className="text-gray-700 flex px-4 py-2 text-sm"
          role="menuitem"
          tabIndex="-1"
          id="menu-item-2"
        >
          <MdOutlinePrivacyTip
            color="gray"
            className="w-6 h-6 rounded-full mr-2 justify-center"
          />
          <span>Our policies</span>
        </span>
      </div>
      <div className="py-1" role="none">
        <span
          className="text-gray-700 flex px-4 py-2 text-sm"
          role="menuitem"
          tabIndex="-1"
          id="menu-item-4"
        >
          <RiLogoutBoxRFill
            color="gray"
            className="w-6 h-6 rounded-full mr-2 justify-center"
          />
          <span>Log Out</span>
        </span>
      </div>
    </div>
  );
};

export default DropDownSec;
